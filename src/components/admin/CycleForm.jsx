import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { appClient } from '@/api/appClient';

export default function CycleForm({ cycle, onSaved, onCancel }) {
  const [form, setForm] = useState({
    name: cycle?.name || '',
    deadline: cycle?.deadline ? cycle.deadline.slice(0, 16) : '',
    grace_period_days: cycle?.grace_period_days ?? 0,
    is_active: cycle?.is_active ?? true,
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const payload = { ...form, deadline: new Date(form.deadline).toISOString() };
    const saved = cycle
      ? await appClient.entities.ApplicationCycle.update(cycle.id, payload)
      : await appClient.entities.ApplicationCycle.create(payload);
    setSaving(false);
    onSaved(saved);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-5 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="cycle_name">Cycle Name</Label>
          <Input id="cycle_name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </div>
        <div>
          <Label htmlFor="cycle_deadline">Deadline</Label>
          <Input
            id="cycle_deadline"
            type="datetime-local"
            value={form.deadline}
            onChange={(e) => setForm({ ...form, deadline: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="grace">Grace Period (days)</Label>
          <Input
            id="grace"
            type="number"
            min="0"
            value={form.grace_period_days}
            onChange={(e) => setForm({ ...form, grace_period_days: parseInt(e.target.value || '0', 10) })}
          />
        </div>
        <div className="flex items-center gap-2 mt-6">
          <input
            id="is_active"
            type="checkbox"
            checked={form.is_active}
            onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
            className="h-4 w-4"
          />
          <Label htmlFor="is_active">Active cycle</Label>
        </div>
      </div>
      <div className="flex gap-3">
        <Button type="submit" disabled={saving}>{saving ? 'Saving…' : 'Save Cycle'}</Button>
        {onCancel && <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>}
      </div>
    </form>
  );
}