import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { appClient } from '@/api/appClient';
import { Loader2, ArrowLeft } from 'lucide-react';
import StatusBadge from '@/components/admin/StatusBadge';
import NotesPanel from '@/components/admin/NotesPanel';
import { STATUS_LABELS } from '@/lib/applicationConstants';

export default function AdminApplicationDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [application, setApplication] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [notes, setNotes] = useState([]);
  const [messages, setMessages] = useState([]);
  const [updatingStatus, setUpdatingStatus] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await appClient.auth.me();
      if (user.role !== 'admin') {
        setLoading(false);
        return;
      }
      setAuthorized(true);
      const app = await appClient.entities.Application.get(id);
      const [docs, allMessages] = await Promise.all([
        appClient.entities.Document.filter({ application_id: id }),
        appClient.entities.ApplicationMessage.filter({ application_id: id }, '-created_date'),
      ]);
      setApplication(app);
      setDocuments(docs);
      setNotes(allMessages.filter((m) => m.is_internal));
      setMessages(allMessages.filter((m) => !m.is_internal));
      setLoading(false);
    })();
  }, [id]);

  const handleStatusChange = async (status) => {
    setUpdatingStatus(true);
    const updated = await appClient.entities.Application.update(id, { status });
    setApplication(updated);
    setUpdatingStatus(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!authorized) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <h1 className="font-heading text-2xl font-semibold text-foreground">Access Restricted</h1>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <h1 className="font-heading text-2xl font-semibold text-foreground">Application Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Link to="/admin" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to all applications
      </Link>

      <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
        <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">{application.full_name}</h1>
        <StatusBadge status={application.status} />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <label className="text-sm font-medium text-foreground">Change status:</label>
        <select
          value={application.status}
          onChange={(e) => handleStatusChange(e.target.value)}
          disabled={updatingStatus}
          className="rounded-md border border-input bg-card px-3 py-1.5 text-sm text-foreground"
        >
          {Object.entries(STATUS_LABELS).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm">
        <div>
          <p className="text-muted-foreground">Email</p>
          <p className="text-foreground">{application.email}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Phone</p>
          <p className="text-foreground">{application.phone}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Date of Birth</p>
          <p className="text-foreground">{application.date_of_birth || '—'}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Indigene of Ovim</p>
          <p className="text-foreground">{application.indigene_confirmed ? 'Yes' : 'No'}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Address</p>
          <p className="text-foreground">{application.address}</p>
        </div>
        <div>
          <p className="text-muted-foreground">School</p>
          <p className="text-foreground">{application.school} (Isuikwuato LGA: {application.school_in_isuikwuato ? 'Yes' : 'No'})</p>
        </div>
        <div>
          <p className="text-muted-foreground">JAMB Reg. Number</p>
          <p className="text-foreground">{application.jamb_reg_number || '—'}</p>
        </div>
        <div>
          <p className="text-muted-foreground">JAMB Score</p>
          <p className="text-foreground">{application.jamb_score ?? '—'}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Institution</p>
          <p className="text-foreground">{application.institution || '—'}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Program</p>
          <p className="text-foreground">{application.intended_degree}</p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="font-heading text-lg font-semibold text-foreground">Statement of Purpose</h2>
        <p className="text-sm text-muted-foreground whitespace-pre-wrap">{application.statement_of_purpose || '(not answered)'}</p>
        <h2 className="font-heading text-lg font-semibold text-foreground">Financial Hardship Statement</h2>
        <p className="text-sm text-muted-foreground whitespace-pre-wrap">{application.financial_hardship_statement || '(not answered)'}</p>
      </div>

      <div className="mt-8">
        <h2 className="font-heading text-lg font-semibold text-foreground">Documents</h2>
        <ul className="mt-3 space-y-1">
          {documents.map((d) => (
            <li key={d.id} className="text-sm">
              <a href={appClient.resolveFileUrl(d.file_url)} target="_blank" rel="noreferrer" className="text-primary underline">{d.file_name}</a>
              <span className="ml-2 text-muted-foreground">({d.type})</span>
            </li>
          ))}
          {!documents.length && <p className="text-sm text-muted-foreground">No documents uploaded.</p>}
        </ul>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-8">
        <NotesPanel
          title="Internal Notes"
          applicationId={id}
          applicantId={application.created_by_id}
          isInternal
          notes={notes}
          onNotesChange={setNotes}
        />
        <NotesPanel
          title="Messages to Applicant"
          applicationId={id}
          applicantId={application.created_by_id}
          isInternal={false}
          notes={messages}
          onNotesChange={setMessages}
        />
      </div>
    </div>
  );
}