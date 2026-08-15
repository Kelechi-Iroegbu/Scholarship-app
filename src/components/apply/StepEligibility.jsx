import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OVIM_COMMUNITIES, OVIM_MAJOR_COMMUNITIES } from '@/lib/applicationConstants';

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

// Ovim → major community → autonomous community. Autonomous community is a
// dependent select (no free text) so applicants can't claim a community that
// doesn't belong to their chosen major community, and it resets whenever the
// major community changes.
function OvimIndigeneSection({ data, onChange }) {
  const handleIndigeneChange = (isIndigene) => {
    onChange('indigene_confirmed', isIndigene);
    if (!isIndigene) {
      onChange('major_community', null);
      onChange('autonomous_community', null);
    }
  };

  const handleMajorCommunityChange = (community) => {
    onChange('major_community', community);
    onChange('autonomous_community', null);
  };

  return (
    <div className="space-y-4">
      <YesNo
        id="indigene"
        label="Are you an indigene of Ovim?"
        value={data.indigene_confirmed}
        onChange={handleIndigeneChange}
        note="Please note: a false claim of indigeneship will disqualify your application."
      />

      {data.indigene_confirmed === false && (
        <div className="rounded-md border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive">
          You are not eligible under the Ovim indigene category.
        </div>
      )}

      {data.indigene_confirmed === true && (
        <div className="space-y-4 rounded-md border border-border bg-muted/30 p-4">
          <div>
            <Label htmlFor="major_community">
              Which major community in Ovim are you from? <span className="text-destructive">*</span>
            </Label>
            <Select value={data.major_community || ''} onValueChange={handleMajorCommunityChange}>
              <SelectTrigger id="major_community" className="mt-1.5 bg-card">
                <SelectValue placeholder="Select major community" />
              </SelectTrigger>
              <SelectContent>
                {OVIM_MAJOR_COMMUNITIES.map((community) => (
                  <SelectItem key={community} value={community}>{community}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {data.major_community && (
            <div>
              <Label htmlFor="autonomous_community">
                Select your Autonomous Community <span className="text-destructive">*</span>
              </Label>
              <Select
                value={data.autonomous_community || ''}
                onValueChange={(v) => onChange('autonomous_community', v)}
              >
                <SelectTrigger id="autonomous_community" className="mt-1.5 bg-card">
                  <SelectValue placeholder="Select autonomous community" />
                </SelectTrigger>
                <SelectContent>
                  {OVIM_COMMUNITIES[data.major_community].map((community) => (
                    <SelectItem key={community} value={community}>{community}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Important:</span> To qualify as an Ovim
            indigene, you must belong to one of the recognized major communities of Ovim and be an
            indigene/citizen of an autonomous community under that major community. Please provide
            accurate information. False claims of indigene status may result in disqualification
            from the scholarship application.
          </p>
        </div>
      )}
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
          your background and confirm your eligibility for the Anna Nnenna Egbe Queen Heart of
          Peace Educational Foundation Scholarship.
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

      <OvimIndigeneSection data={data} onChange={onChange} />

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