import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from '@/components/admin/StatusBadge';

export default function ApplicationsTable({ applications }) {
  if (!applications.length) {
    return <p className="mt-6 text-sm text-muted-foreground">No applications match this filter.</p>;
  }
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead className="bg-secondary text-left text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">School</th>
            <th className="px-4 py-3">Community</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3" />
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {applications.map((app) => (
            <tr key={app.id} className="bg-card hover:bg-muted/50 transition-colors">
              <td className="px-4 py-3 text-foreground">{app.full_name || '—'}</td>
              <td className="px-4 py-3 text-muted-foreground">{app.email || '—'}</td>
              <td className="px-4 py-3 text-muted-foreground">{app.school || '—'}</td>
              <td className="px-4 py-3 text-muted-foreground">
                {app.major_community ? `${app.major_community} · ${app.autonomous_community || '—'}` : '—'}
              </td>
              <td className="px-4 py-3"><StatusBadge status={app.status} /></td>
              <td className="px-4 py-3 text-right">
                <Link
                  to={`/admin/applications/${app.id}`}
                  className="text-primary font-medium hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}