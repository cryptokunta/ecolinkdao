"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Profile</CardTitle>
        <Button variant="ghost" size="icon" onClick={() => setIsEditing(!isEditing)}>
          <Icon name="edit" className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" />
            <AvatarFallback>EC</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h3 className="text-xl font-bold">Elena Cooper</h3>
            <p className="text-sm text-muted-foreground">Sustainable Energy Innovator</p>
          </div>
          <div className="w-full space-y-2">
            <div className="flex items-center gap-2">
              <Icon name="map-pin" className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Barcelona, Spain</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="clock" className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Member since 2023</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Passionate about renewable energy and community-driven solutions. 
              Working on solar implementations and energy education projects.
            </p>
          </div>
          <div className="flex gap-4 w-full">
            <Button className="flex-1" variant="outline">
              <Icon name="message-circle" className="mr-2 h-4 w-4" />
              Message
            </Button>
            <Button className="flex-1">
              <Icon name="users" className="mr-2 h-4 w-4" />
              Connect
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}