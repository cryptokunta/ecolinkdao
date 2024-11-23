"use client"

import { useContext } from 'react'
import { AuthContext } from '@/components/auth/auth-provider'
import type { Permission } from '@/lib/types/auth'

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  const hasPermission = (permission: Permission) => {
    return context.user?.permissions.some(p => 
      p.resource === permission.resource && 
      p.actions.some(a => permission.actions.includes(a))
    )
  }

  return {
    ...context,
    hasPermission
  }
}