"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icons"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactOptions() {
  const [isEmailOpen, setIsEmailOpen] = useState(false)
  const telegramUsername = "@ecolinkdao"

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="message-circle" className="h-5 w-5 text-primary" />
          Connect With Us
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Telegram Option */}
        <div className="rounded-lg border bg-card p-4 hover:bg-accent/5 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Icon name="send" className="h-5 w-5 text-[#229ED9]" />
              <h3 className="font-semibold">Telegram</h3>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(`https://t.me/${telegramUsername.substring(1)}`, '_blank')}
              className="hover:text-[#229ED9] hover:border-[#229ED9]"
            >
              Connect
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Get instant responses and join our community chat
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <code className="rounded bg-muted px-2 py-1">
              {telegramUsername}
            </code>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => navigator.clipboard.writeText(telegramUsername)}
            >
              <Icon name="copy" className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Email Option */}
        <Dialog open={isEmailOpen} onOpenChange={setIsEmailOpen}>
          <DialogTrigger asChild>
            <div className="rounded-lg border bg-card p-4 hover:bg-accent/5 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Icon name="mail" className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Email</h3>
                </div>
                <Button variant="outline" size="sm">
                  Write
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Send us a detailed message or inquiry
              </p>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Send Message</DialogTitle>
              <DialogDescription>
                We'll get back to you within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="What's your message about?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Type your message here..."
                  className="min-h-[150px]"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsEmailOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault()
                    // Implement email sending logic
                    setIsEmailOpen(false)
                  }}
                >
                  <Icon name="send" className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Operating Hours */}
        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="clock" className="h-4 w-4" />
            <span>Response times: Mon-Fri, 9:00-18:00 UTC</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}