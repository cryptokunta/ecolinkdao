import { DashboardHero } from '@/components/dashboard/hero'
import { CategoryGrid } from '@/components/dashboard/category-grid'
import { StatsOverview } from '@/components/dashboard/stats-overview'
import { ActiveProjects } from '@/components/dashboard/active-projects'
import { CommunityMetrics } from '@/components/dashboard/community-metrics'
import { CommunityFeed } from '@/components/dashboard/community-feed'
import { Timeline } from '@/components/dashboard/timeline'

export default function Home() {
  return (
    <div className="space-y-8 pb-8">
      <DashboardHero />
      <CommunityFeed />
      <div className="grid gap-6">
        <StatsOverview />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-full lg:col-span-4">
            <CategoryGrid />
          </div>
          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <Timeline />
              </div>
              <div className="col-span-1">
                <ActiveProjects />
              </div>
              <div className="col-span-1">
                <CommunityMetrics />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}