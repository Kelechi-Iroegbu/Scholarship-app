import React, { useState } from 'react';
import { appClient } from '@/api/appClient';
import { Label } from '@/components/ui/label';
import { FileCheck2, Loader2, UploadCloud } from 'lucide-react';
import { DOCUMENT_TYPES, MAX_FILE_SIZE, ACCEPTED_FILE_TYPES } from '@/lib/applicationConstants';

export default function StepDocuments({ applicationId, documents, onDocumentsChange }) {
  const [uploadingType, setUploadingType] = useState(null);
  const [error, setError] = useState('');

  const handleFile = async (type, file) => {
    setError('');
    if (!file) return;
    const validExt = /\.(pdf|jpg|jpeg|png)$/i.test(file.name);
    if (!validExt) {
      setError('Only PDF, JPG, and PNG files are accepted.');
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setError('File must be 5MB or smaller.');
      return;
    }
    setUploadingType(type);
    try {
      const { file_url } = await appClient.integrations.Core.UploadFile({ file });
      const existing = documents.find((d) => d.type === type);
      if (existing) {
        await appClient.entities.Document.update(existing.id, { file_url, file_name: file.name });
        onDocumentsChange(documents.map((d) => (d.id === existing.id ? { ...d, file_url, file_name: file.name } : d)));
      } else {
        const saved = await appClient.entities.Document.create({ application_id: applicationId, type, file_url, file_name: file.name });
        onDocumentsChange([...documents, saved]);
      }
    } finally {
      setUploadingType(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-xl font-semibold text-foreground">Document Upload</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Accepted formats: PDF, JPG, PNG. Maximum file size: 5MB.
        </p>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <div className="grid sm:grid-cols-2 gap-4">
        {DOCUMENT_TYPES.map(({ key, label }) => {
          const doc = documents.find((d) => d.type === key);
          const isUploading = uploadingType === key;
          return (
            <div key={key} className="rounded-lg border border-border p-4">
              <Label>{label}</Label>
              <label className="mt-3 flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-border p-4 text-center cursor-pointer hover:border-primary transition">
                {isUploading ? (
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                ) : doc ? (
                  <FileCheck2 className="h-6 w-6 text-primary" />
                ) : (
                  <UploadCloud className="h-6 w-6 text-muted-foreground" />
                )}
                <span className="text-xs text-muted-foreground break-all">
                  {isUploading ? 'Uploading…' : doc ? doc.file_name : 'Click to upload'}
                </span>
                {doc && !isUploading && (
                  <span className="text-xs font-medium text-primary">Replace file</span>
                )}
                <input
                  type="file"
                  accept={ACCEPTED_FILE_TYPES}
                  className="hidden"
                  onChange={(e) => handleFile(key, e.target.files?.[0])}
                />
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}