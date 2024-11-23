"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const updates = [
  {
    id: 1,
    author: "Elena Cooper",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
    initials: "EC",
    content: "Just completed the initial assessment of the solar installation site. The community center roof is perfect for our needs. Sharing some photos from the survey.",
    type: "image",
    attachment: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
    timestamp: "2 hours ago",
    reactions: 12,
    comments: 4
  },
  {
    id: 2,
    author: "Marcus Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    initials: "MC",
    content: "Exciting progress on the water filtration system! We've successfully implemented the new design that uses 30% less energy while maintaining the same output.",
    type: "text",
    timestamp: "4 hours ago",
    reactions: 8,
    comments: 2
  },
  {
    id: 3,
    author: "Sarah Williams",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    initials: "SW",
    content: "The community garden is thriving! This season's harvest is looking promising. Join us this weekend for the maintenance workshop.",
    type: "image",
    attachment: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80",
    timestamp: "6 hours ago",
    reactions: 15,
    comments: 6
  }
]

export function CommunityFeed() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Community Feed</CardTitle>
        <Button variant="outline" size="sm">
          <Icon name="plus" className="mr-2 h-4 w-4" />
          Create Post
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Post Input */}
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
            <div className="flex-1 flex items-center gap-2 rounded-full border px-4 py-2">
              <input 
                type="text" 
                placeholder="Share an update or insight..."
                className="flex-1 bg-transparent border-none focus:outline-none text-sm"
              />
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon">
                  <Icon name="image" className="h-4 w-4 text-muted-foreground" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="link" className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>
          </div>

          {/* Feed Posts */}
          {updates.map((update) => (
            <div key={update.id} className="space-y-4">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={update.avatar} />
                  <AvatarFallback>{update.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{update.author}</h4>
                    <span className="text-sm text-muted-foreground">{update.timestamp}</span>
                  </div>
                  <p className="text-sm">{update.content}</p>
                </div>
              </div>

              {update.type === "image" && update.attachment && (
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={update.attachment} 
                    alt="Update attachment" 
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm">
                  <Icon name="heart" className="mr-1 h-4 w-4" />
                  {update.reactions}
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="message-circle" className="mr-1 h-4 w-4" />
                  {update.comments}
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="share" className="mr-1 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}