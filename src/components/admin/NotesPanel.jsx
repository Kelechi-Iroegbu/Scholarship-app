import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { appClient } from '@/api/appClient';
import { format } from 'date-fns';

export default function NotesPanel({ title, applicationId, applicantId, isInternal, notes, onNotesChange }) {
  const [text, setText] = useState('');
  const [saving, setSaving] = useState(false);

  const handleAdd = async () => {
    if (!text.trim()) return;
    setSaving(true);
    const user = await appClient.auth.me();
    const created = await appClient.entities.ApplicationMessage.create({
      application_id: applicationId,
      applicant_id: applicantId,
      sender_name: user.full_name,
      message: text.trim(),
      is_internal: isInternal,
    });
    onNotesChange([created, ...notes]);
    setText('');
    setSaving(false);
  };

  return (
    <div>
      <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
      <div className="mt-3 space-y-3">
        {notes.map((n) => (
          <div key={n.id} className="rounded-md border border-border p-3 text-sm">
            <p className="text-xs text-muted-foreground">{n.sender_name} · {format(new Date(n.created_date), 'MMM d, yyyy p')}</p>
            <p className="mt-1 text-foreground/90">{n.message}</p>
          </div>
        ))}
        {!notes.length && <p className="text-sm text-muted-foreground">No entries yet.</p>}
      </div>
      <div className="mt-4 space-y-2">
        <Textarea rows={3} value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a note…" />
        <Button size="sm" onClick={handleAdd} disabled={saving}>{saving ? 'Adding…' : 'Add'}</Button>
      </div>
    </div>
  );
}