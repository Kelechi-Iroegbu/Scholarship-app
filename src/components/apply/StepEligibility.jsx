import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

function YesNo({ id, label, value, onChange, note }) {
  return (
    <div>
      <Label>{label}</Label>
      <RadioGroup
        value={value === true ? 'yes' : value === false ? 'no' : ''}
        onValueChange={(v) => onChange(v === 'yes')}
        className="mt-2 flex items-center gap-6"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem value="yes" id={`${id}-yes`} />
          <Label htmlFor={`${id}-yes`} className="font-normal cursor-pointer">Yes</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="no" id={`${id}-no`} />
          <Label htmlFor={`${id}-no`} className="font-normal cursor-pointer">No</Label>
        </div>
      </RadioGroup>
      {note && <p className="mt-1.5 text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

export default function StepEligibility({ data, onChange }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-xl font-semibold text-foreground">Eligibility Form</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Please answer honestly and completely — this information helps the committee understand
          your background and confirm your eligibility for the Ovim Hardship Scholarship.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="full_name">Full Legal Name</Label>
          <Input id="full_name" value={data.full_name || ''} onChange={(e) => onChange('full_name', e.target.value)} />
        </div>
        <div>
          <Label htmlFor="date_of_birth">Date of Birth</Label>
          <Input
            id="date_of_birth"
            type="date"
            value={data.date_of_birth || ''}
            onChange={(e) => onChange('date_of_birth', e.target.value)}
          />
        </div>
      </div>

      <YesNo
        id="indigene"
        label="Are you an indigene of Ovim?"
        value={data.indigene_confirmed}
        onChange={(v) => onChange('indigene_confirmed', v)}
        note="Please note: a false claim of indigeneship will disqualify your application."
      />

      <div>
        <Label htmlFor="address">Current Residential Address in Ovim</Label>
        <Input id="address" value={data.address || ''} onChange={(e) => onChange('address', e.target.value)} />
      </div>

      <div>
        <Label htmlFor="school">Name of Post-Primary School Attended</Label>
        <Input id="school" value={data.school || ''} onChange={(e) => onChange('school', e.target.value)} />
      </div>

      <YesNo
        id="school_lga"
        label="Is this school located within Isuikwuato LGA?"
        value={data.school_in_isuikwuato}
        onChange={(v) => onChange('school_in_isuikwuato', v)}
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="jamb_reg_number">JAMB Registration Number</Label>
          <Input
            id="jamb_reg_number"
            value={data.jamb_reg_number || ''}
            onChange={(e) => onChange('jamb_reg_number', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="jamb_score">JAMB Score (2026 Examination)</Label>
          <Input
            id="jamb_score"
            type="number"
            value={data.jamb_score ?? ''}
            onChange={(e) => onChange('jamb_score', e.target.value === '' ? null : parseInt(e.target.value, 10))}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="institution">University / Institution Admitted Into</Label>
          <Input id="institution" value={data.institution || ''} onChange={(e) => onChange('institution', e.target.value)} />
        </div>
        <div>
          <Label htmlFor="intended_degree">Program Admitted Into</Label>
          <Input
            id="intended_degree"
            value={data.intended_degree || ''}
            onChange={(e) => onChange('intended_degree', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}