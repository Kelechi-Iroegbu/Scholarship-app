import React, { useEffect, useState } from 'react';
import { appClient } from '@/api/appClient';
import { Loader2 } from 'lucide-react';
import ApplicationsTable from '@/components/admin/ApplicationsTable';
import AdminCycleManager from '@/components/admin/AdminCycleManager';
import { STATUS_LABELS, OVIM_MAJOR_COMMUNITIES } from '@/lib/applicationConstants';

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [applications, setApplications] = useState([]);
  const [cycles, setCycles] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [communityFilter, setCommunityFilter] = useState('all');

  useEffect(() => {
    (async () => {
      const user = await appClient.auth.me();
      if (user.role !== 'admin') {
        setLoading(false);
        return;
      }
      setAuthorized(true);
      const [apps, cycleList] = await Promise.all([
        appClient.entities.Application.list('-created_date'),
        appClient.entities.ApplicationCycle.list('-created_date'),
      ]);
      setApplications(apps);
      setCycles(cycleList);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!authorized) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <h1 className="font-heading text-2xl font-semibold text-foreground">Access Restricted</h1>
        <p className="mt-3 text-muted-foreground">This page is only available to foundation administrators.</p>
      </div>
    );
  }

  const filtered = applications
    .filter((a) => statusFilter === 'all' || a.status === statusFilter)
    .filter((a) => communityFilter === 'all' || a.major_community === communityFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">Admin Dashboard</h1>

      <div className="mt-10">
        <AdminCycleManager cycles={cycles} onCyclesChange={setCycles} />
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-3">
          <h2 className="font-heading text-lg font-semibold text-foreground">Applications</h2>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-md border border-input bg-card px-3 py-1.5 text-sm text-foreground"
          >
            <option value="all">All Statuses</option>
            {Object.entries(STATUS_LABELS).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
          <select
            value={communityFilter}
            onChange={(e) => setCommunityFilter(e.target.value)}
            className="rounded-md border border-input bg-card px-3 py-1.5 text-sm text-foreground"
          >
            <option value="all">All Communities</option>
            {OVIM_MAJOR_COMMUNITIES.map((community) => (
              <option key={community} value={community}>{community}</option>
            ))}
          </select>
        </div>
        <ApplicationsTable applications={filtered} />
      </div>
    </div>
  );
}