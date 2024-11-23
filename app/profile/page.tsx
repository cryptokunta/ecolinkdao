"use client"

import { UserProfile } from "@/components/profile/user-profile"
import { UserImpact } from "@/components/profile/user-impact"
import { UserTasks } from "@/components/profile/user-tasks"
import { UserSkills } from "@/components/profile/user-skills"

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Your Impact Hub</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-full lg:col-span-3">
          <UserProfile />
          <div className="mt-6">
            <UserSkills />
          </div>
        </div>
        <div className="lg:col-span-4 space-y-6">
          <UserImpact />
          <UserTasks />
        </div>
      </div>
    </div>
  )
}