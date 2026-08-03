import React from 'react';
import { FileText } from 'lucide-react';
import { DOCUMENT_TYPES } from '@/lib/applicationConstants';

export default function DocumentsList({ documents }) {
  return (
    <ul className="space-y-2">
      {DOCUMENT_TYPES.map(({ key, label }) => {
        const doc = documents.find((d) => d.type === key);
        return (
          <li key={key} className="flex items-center gap-2 text-sm">
            <FileText className="h-4 w-4 text-primary shrink-0" />
            <span className="text-foreground/90">{label}:</span>
            {doc ? (
              <a href={doc.file_url} target="_blank" rel="noreferrer" className="text-primary underline">
                {doc.file_name}
              </a>
            ) : (
              <span className="text-muted-foreground">Not submitted</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}