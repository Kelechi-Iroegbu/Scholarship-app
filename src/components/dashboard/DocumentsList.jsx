import React from 'react';
import { FileText } from 'lucide-react';
import { DOCUMENT_TYPES } from '@/lib/applicationConstants';
import { appClient } from '@/api/appClient';

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
              <button type="button" onClick={() => appClient.openFile(doc.file_url)} className="text-primary underline text-left break-all">
                {doc.file_name}
              </button>
            ) : (
              <span className="text-muted-foreground">Not submitted</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}