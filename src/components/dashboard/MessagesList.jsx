import React from 'react';
import { MessageSquare } from 'lucide-react';
import { format } from 'date-fns';

export default function MessagesList({ messages }) {
  if (!messages.length) {
    return <p className="text-sm text-muted-foreground">No messages from the foundation yet.</p>;
  }
  return (
    <ul className="space-y-4">
      {messages.map((m) => (
        <li key={m.id} className="rounded-md border border-border p-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="font-medium text-foreground">{m.sender_name || 'AGU Godswill Egbe Foundation'}</span>
            <span>· {format(new Date(m.created_date), 'MMM d, yyyy')}</span>
          </div>
          <p className="mt-2 text-sm text-foreground/90">{m.message}</p>
        </li>
      ))}
    </ul>
  );
}