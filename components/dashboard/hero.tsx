"use client"

import { useAuth } from '@/components/auth/auth-provider'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icons'

export function DashboardHero() {
  const { user } = useAuth()

  const quickActions = [
    {
      label: 'Create Project',
      icon: 'plus-circle',
      href: '/projects/new',
      role: ['admin', 'manager']
    },
    {
      label: 'View Tasks',
      icon: 'list-checks',
      href: '/tasks',
      role: ['admin', 'manager', 'member']
    },
    {
      label: 'Analytics',
      icon: 'bar-chart',
      href: '/analytics',
      role: ['admin']
    }
  ].filter(action => action.role.includes(user?.role));

  return (
    <div className="relative overflow-hidden rounded-lg border bg-card p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {user?.name}
          </h1>
          <p className="text-muted-foreground">
            Track your impact and manage resources effectively
          </p>
          <div className="flex flex-wrap gap-4">
            {quickActions.map(action => (
              <Button
                key={action.href}
                variant="outline"
                className="group hover:border-primary"
                onClick={() => window.location.href = action.href}
              >
                <Icon
                  name={action.icon}
                  className="mr-2 h-4 w-4 text-muted-foreground group-hover:text-primary"
                />
                {action.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="hidden md:block">
          <div className="relative h-[200px] w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg" />
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
              alt=""
              className="h-full w-full object-cover rounded-lg opacity-75"
            />
          </div>
        </div>
      </div>
    </div>
  )
}