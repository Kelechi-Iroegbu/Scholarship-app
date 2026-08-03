export const STATUS_LABELS = {
  draft: 'Draft',
  submitted: 'Submitted',
  under_review: 'Under Review',
  accepted: 'Accepted',
  rejected: 'Rejected',
  waitlisted: 'Waitlisted',
};

export const STATUS_ORDER = ['draft', 'submitted', 'under_review', 'decision'];

export const DECISION_STATUSES = ['accepted', 'rejected', 'waitlisted'];

export const SOP_MIN_WORDS = 200;
export const SOP_MAX_WORDS = 600;
export const HARDSHIP_MIN_WORDS = 250;

export const DOCUMENT_TYPES = [
  { key: 'lga_certificate', label: 'Local Government of Origin Certificate' },
  { key: 'ssce_result', label: 'SSCE Result' },
  { key: 'jamb_result_slip', label: 'JAMB Examination Result Slip' },
  { key: 'admission_letter', label: 'University Admission Letter' },
];

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ACCEPTED_FILE_TYPES = '.pdf,.jpg,.jpeg,.png';

export function countWords(text) {
  return (text || '').trim().split(/\s+/).filter(Boolean).length;
}

export function getDeadlineInfo(cycle) {
  if (!cycle) return null;
  const deadline = new Date(cycle.deadline);
  const graceEnd = new Date(deadline);
  graceEnd.setDate(graceEnd.getDate() + (cycle.grace_period_days || 0));
  const now = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysRemaining = Math.ceil((deadline - now) / msPerDay);
  const isPastDeadline = now > deadline;
  const isLocked = now > graceEnd;
  return { deadline, graceEnd, daysRemaining, isPastDeadline, isLocked };
}

// Step completion helpers — used by the wizard stepper to show
// Not Started / In Progress / Complete for each stage.
const ELIGIBILITY_FIELDS = [
  'full_name',
  'date_of_birth',
  'address',
  'school',
  'jamb_reg_number',
  'jamb_score',
  'institution',
  'intended_degree',
];

export function getEligibilityStatus(app) {
  if (!app) return 'not_started';
  const filledCount = ELIGIBILITY_FIELDS.filter((f) => app[f] !== undefined && app[f] !== null && app[f] !== '').length;
  const confirmationsSet = app.indigene_confirmed !== undefined && app.indigene_confirmed !== null &&
    app.school_in_isuikwuato !== undefined && app.school_in_isuikwuato !== null;
  if (filledCount === 0 && !confirmationsSet) return 'not_started';
  if (filledCount === ELIGIBILITY_FIELDS.length && confirmationsSet) return 'complete';
  return 'in_progress';
}

export function getSopStatus(app) {
  const words = countWords(app?.statement_of_purpose);
  if (words === 0) return 'not_started';
  if (words >= SOP_MIN_WORDS) return 'complete';
  return 'in_progress';
}

export function getHardshipStatus(app) {
  const words = countWords(app?.financial_hardship_statement);
  if (words === 0) return 'not_started';
  if (words >= HARDSHIP_MIN_WORDS) return 'complete';
  return 'in_progress';
}

export function getDocumentsStatus(documents) {
  if (!documents || documents.length === 0) return 'not_started';
  if (documents.length >= DOCUMENT_TYPES.length) return 'complete';
  return 'in_progress';
}