import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import CycleForm from '@/components/admin/CycleForm';
import { format } from 'date-fns';

export default function AdminCycleManager({ cycles, onCyclesChange }) {
  const [editing, setEditing] = useState(null);
  const [adding, setAdding] = useState(false);

  const handleSaved = (saved) => {
    const exists = cycles.some((c) => c.id === saved.id);
    onCyclesChange(exists ? cycles.map((c) => (c.id === saved.id ? saved : c)) : [saved, ...cycles]);
    setEditing(null);
    setAdding(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-lg font-semibold text-foreground">Application Cycles</h2>
        {!adding && (
          <Button size="sm" onClick={() => setAdding(true)}>
            <Plus className="h-4 w-4 mr-1" /> New Cycle
          </Button>
        )}
      </div>

      {adding && (
        <div className="mt-4">
          <CycleForm onSaved={handleSaved} onCancel={() => setAdding(false)} />
        </div>
      )}

      <div className="mt-4 space-y-3">
        {cycles.map((cycle) =>
          editing === cycle.id ? (
            <CycleForm key={cycle.id} cycle={cycle} onSaved={handleSaved} onCancel={() => setEditing(null)} />
          ) : (
            <div key={cycle.id} className="flex items-center justify-between rounded-md border border-border p-4">
              <div>
                <p className="font-medium text-foreground">
                  {cycle.name} {cycle.is_active && <span className="ml-2 text-xs text-primary">Active</span>}
                </p>
                <p className="text-xs text-muted-foreground">
                  Deadline {format(new Date(cycle.deadline), 'MMM d, yyyy p')} · Grace {cycle.grace_period_days || 0} day(s)
                </p>
              </div>
              <Button size="sm" variant="outline" onClick={() => setEditing(cycle.id)}>Edit</Button>
            </div>
          )
        )}
      </div>
    </div>
  );
}