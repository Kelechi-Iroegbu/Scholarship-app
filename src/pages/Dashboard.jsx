import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { appClient } from '@/api/appClient';
import { Loader2, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatusTimeline from '@/components/dashboard/StatusTimeline';
import DocumentsList from '@/components/dashboard/DocumentsList';
import MessagesList from '@/components/dashboard/MessagesList';
import { STATUS_LABELS } from '@/lib/applicationConstants';
import { useAuth } from '@/lib/AuthContext';

export default function Dashboard() {
  const { logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [application, setApplication] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [messages, setMessages] = useState([]);

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const apps = await appClient.entities.Application.list('-created_date', 1);
      const app = apps[0] || null;
      setApplication(app);
      if (app) {
        const [docs, msgs] = await Promise.all([
          appClient.entities.Document.filter({ application_id: app.id }),
          appClient.entities.ApplicationMessage.filter({ application_id: app.id, is_internal: false }, '-created_date'),
        ]);
        setDocuments(docs);
        setMessages(msgs);
      }
    } catch (err) {
      setError(err.message || 'Something went wrong loading your dashboard.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="font-heading text-2xl font-semibold text-foreground">Couldn't Load Dashboard</h1>
        <p className="mt-3 text-muted-foreground">{error}</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button onClick={loadDashboard}>Try Again</Button>
          <Button variant="ghost" onClick={() => logout()}>
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="font-heading text-2xl font-semibold text-foreground">No Application Yet</h1>
        <p className="mt-3 text-muted-foreground">Start your scholarship application to see your status here.</p>
        <Button asChild className="mt-6"><Link to="/apply">Start Application</Link></Button>
        <div className="mt-6">
          <Button variant="ghost" onClick={() => logout()}>
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">My Application</h1>
        <Button variant="outline" size="sm" onClick={() => logout()}>
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
      <p className="mt-2 text-muted-foreground">Current status: <span className="font-semibold text-foreground">{STATUS_LABELS[application.status]}</span></p>

      <div className="mt-10 rounded-lg border border-border bg-card p-6">
        <StatusTimeline status={application.status} />
      </div>

      {application.status === 'draft' && (
        <Button asChild className="mt-6"><Link to="/apply">Continue Application</Link></Button>
      )}

      <div className="mt-10 grid sm:grid-cols-2 gap-8">
        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">Submitted Documents</h2>
          <div className="mt-4"><DocumentsList documents={documents} /></div>
        </div>
        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">Messages from the Foundation</h2>
          <div className="mt-4"><MessagesList messages={messages} /></div>
        </div>
      </div>
    </div>
  );
}