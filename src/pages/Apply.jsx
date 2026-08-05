import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { appClient } from '@/api/appClient';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import WizardProgress from '@/components/apply/WizardProgress';
import StepEligibility from '@/components/apply/StepEligibility';
import StepStatementOfPurpose from '@/components/apply/StepStatementOfPurpose';
import StepFinancialHardship from '@/components/apply/StepFinancialHardship';
import StepDocuments from '@/components/apply/StepDocuments';
import StepReview from '@/components/apply/StepReview';
import { getDeadlineInfo, countWords, HARDSHIP_MIN_WORDS } from '@/lib/applicationConstants';

export default function Apply() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [saving, setSaving] = useState(false);
  const [application, setApplication] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [cycle, setCycle] = useState(null);
  const [step, setStep] = useState(1);

  const loadApplication = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      const user = await appClient.auth.me();
      const cycles = await appClient.entities.ApplicationCycle.filter({ is_active: true });
      const activeCycle = cycles[0] || null;
      setCycle(activeCycle);

      let app = null;
      if (activeCycle) {
        const existing = await appClient.entities.Application.filter({ cycle_id: activeCycle.id });
        app = existing[0] || null;
        if (!app) {
          app = await appClient.entities.Application.create({
            cycle_id: activeCycle.id,
            full_name: user.full_name || '',
            email: user.email || '',
            phone: user.phone || '',
          });
        }
      }
      setApplication(app);
      setStep(app?.current_step || 1);
      if (app) {
        const docs = await appClient.entities.Document.filter({ application_id: app.id });
        setDocuments(docs);
      }
    } catch (err) {
      setLoadError(err.message || 'Something went wrong loading your application.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadApplication();
  }, [loadApplication]);

  const handleChange = useCallback((field, value) => {
    setApplication((prev) => ({ ...prev, [field]: value }));
  }, []);

  const persist = async (extra = {}) => {
    setSaving(true);
    const updated = await appClient.entities.Application.update(application.id, { ...application, ...extra });
    setApplication(updated);
    setSaving(false);
    return updated;
  };

  const deadlineInfo = getDeadlineInfo(cycle);
  const isLocked = deadlineInfo?.isLocked && application?.status === 'draft';

  const canContinue =
    step !== 3 || countWords(application?.financial_hardship_statement) >= HARDSHIP_MIN_WORDS;

  const goNext = async () => {
    const nextStep = Math.min(step + 1, 5);
    await persist({ current_step: nextStep });
    setStep(nextStep);
  };

  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const goToStep = (s) => setStep(s);

  const handleSubmit = async () => {
    await persist({ status: 'submitted', submitted_date: new Date().toISOString() });
    navigate('/dashboard');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="font-heading text-2xl font-semibold text-foreground">Couldn't Load Application</h1>
        <p className="mt-3 text-muted-foreground">{loadError}</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button onClick={loadApplication}>Try Again</Button>
          <Button variant="outline" onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
        </div>
      </div>
    );
  }

  if (!cycle) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="font-heading text-2xl font-semibold text-foreground">Applications Are Closed</h1>
        <p className="mt-3 text-muted-foreground">There is no active application cycle at this time.</p>
      </div>
    );
  }

  if (application?.status !== 'draft') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="font-heading text-2xl font-semibold text-foreground">Application Already Submitted</h1>
        <p className="mt-3 text-muted-foreground">View your status and messages on your dashboard.</p>
        <Button className="mt-6" onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">Your Application</h1>
      <p className="mt-2 text-muted-foreground">
        Thank you for taking the time to apply. Complete each step below — you can save and come back anytime.
      </p>
      {deadlineInfo && (
        <p className={`mt-2 text-sm ${deadlineInfo.isPastDeadline ? 'text-destructive' : 'text-muted-foreground'}`}>
          {deadlineInfo.isLocked
            ? 'The application deadline has passed and submissions are now closed.'
            : deadlineInfo.isPastDeadline
            ? 'The deadline has passed — you are in the grace period.'
            : `${deadlineInfo.daysRemaining} day${deadlineInfo.daysRemaining === 1 ? '' : 's'} remaining to submit.`}
        </p>
      )}

      <div className="mt-8">
        <WizardProgress currentStep={step} application={application} documents={documents} />
      </div>

      <div className="mt-10">
        {step === 1 && <StepEligibility data={application} onChange={handleChange} />}
        {step === 2 && <StepStatementOfPurpose data={application} onChange={handleChange} />}
        {step === 3 && <StepFinancialHardship data={application} onChange={handleChange} />}
        {step === 4 && (
          <StepDocuments applicationId={application.id} documents={documents} onDocumentsChange={setDocuments} />
        )}
        {step === 5 && <StepReview data={application} documents={documents} onEditStep={goToStep} />}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <Button variant="outline" onClick={goBack} disabled={step === 1 || saving}>
          Back
        </Button>
        {step < 5 ? (
          <Button onClick={goNext} disabled={saving || !canContinue}>
            {saving ? 'Saving…' : 'Save & Continue'}
          </Button>
        ) : (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button disabled={saving || isLocked}>
                {isLocked ? 'Submissions Closed' : 'Submit Application'}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  You won't be able to edit your application after submission. Please make sure
                  everything is accurate before continuing.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Go back</AlertDialogCancel>
                <AlertDialogAction onClick={handleSubmit}>Yes, submit my application</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </div>
  );
}