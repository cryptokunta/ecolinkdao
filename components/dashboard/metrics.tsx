"use client"

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

interface Metric {
  id: string
  label: string
  value: string
  change: number
  icon: string
}

export function DashboardMetrics() {
  const { t } = useTranslation()
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      id: 'active_projects',
      label: t('metrics.activeProjects'),
      value: '12',
      change: 8.2,
      icon: 'folder'
    },
    {
      id: 'tasks_completed',
      label: t('metrics.tasksCompleted'),
      value: '128',
      change: 12.5,
      icon: 'check-circle'
    },
    {
      id: 'team_members',
      label: t('metrics.teamMembers'),
      value: '24',
      change: -2.4,
      icon: 'users'
    },
    {
      id: 'efficiency',
      label: t('metrics.efficiency'),
      value: '94%',
      change: 4.1,
      icon: 'trending-up'
    }
  ])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.id} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </p>
              <h3 className="text-2xl font-bold tracking-tight mt-2">
                {metric.value}
              </h3>
            </div>
            <div className={cn(
              "rounded-full p-2.5",
              metric.change > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            )}>
              <Icon name={metric.icon} className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Icon
              name={metric.change > 0 ? "trending-up" : "trending-down"}
              className={cn(
                "h-4 w-4",
                metric.change > 0 ? "text-green-500" : "text-red-500"
              )}
            />
            <span className={cn(
              "text-sm",
              metric.change > 0 ? "text-green-500" : "text-red-500"
            )}>
              {Math.abs(metric.change)}%
            </span>
            <span className="text-sm text-muted-foreground">
              {t('metrics.vsLastMonth')}
            </span>
          </div>
        </Card>
      ))}
    </div>
  )
}