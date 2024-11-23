import { Suspense } from 'react'
import { DashboardHero } from '@/components/dashboard/hero'
import { DashboardMetrics } from '@/components/dashboard/metrics'
import { TaskBoard } from '@/components/dashboard/task-board'
import { AnalyticsGraphs } from '@/components/dashboard/analytics'
import { DashboardSkeleton } from '@/components/dashboard/loading'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHero />
      
      <Suspense fallback={<DashboardSkeleton type="metrics" />}>
        <DashboardMetrics />
      </Suspense>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Suspense fallback={<DashboardSkeleton type="tasks" />}>
            <TaskBoard />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<DashboardSkeleton type="analytics" />}>
            <AnalyticsGraphs />
          </Suspense>
        </div>
      </div>
    </div>
  )
}