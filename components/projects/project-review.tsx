"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Icon } from "@/components/ui/icons"
import { ProjectStatusBadge } from "./project-status-badge"
import { useToast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import type { Project } from "@/lib/types/project"

const mockProject: Project = {
  id: "1",
  title: "Community Solar Installation",
  category: "Energy Systems",
  status: "pending",
  submittedBy: "Elena Cooper",
  submittedDate: "2024-01-20",
  description: "Installation of solar panels on the community center roof to provide sustainable energy.",
  goals: "Reduce energy costs by 40% and provide clean energy to 100 households.",
  resources: "Solar panels, inverters, mounting equipment, and skilled labor.",
  timeline: "3 months",
  budget: 15000,
  reviews: [
    {
      id: "review1",
      adminId: "admin1",
      adminName: "John Admin",
      comment: "Project aligns well with our sustainability goals.",
      decision: "approved",
      date: "2024-01-21"
    }
  ]
}

export function ProjectReview() {
  const router = useRouter()
  const { toast } = useToast()
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleReview = async (decision: 'approved' | 'rejected') => {
    try {
      setIsSubmitting(true)
      // Here you would make an API call to submit the review
      
      toast({
        title: `Project ${decision}`,
        description: "The review has been submitted successfully.",
      })
      
      router.push("/admin/projects")
    } catch (error) {
      toast({
        title: "Error submitting review",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Icon name="clipboard-check" className="h-5 w-5 text-primary" />
            Project Review
          </CardTitle>
          <ProjectStatusBadge status={mockProject.status} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Project Overview */}
          <div className="rounded-lg border p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{mockProject.title}</h3>
              <ProjectStatusBadge status={mockProject.status} />
            </div>
            <div className="grid gap-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="user" className="h-4 w-4" />
                Submitted by {mockProject.submittedBy}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="calendar" className="h-4 w-4" />
                {mockProject.submittedDate}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Description</h4>
              <p className="text-sm text-muted-foreground">{mockProject.description}</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Goals & Impact</h4>
              <p className="text-sm text-muted-foreground">{mockProject.goals}</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Required Resources</h4>
              <p className="text-sm text-muted-foreground">{mockProject.resources}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-medium mb-2">Timeline</h4>
                <p className="text-sm text-muted-foreground">{mockProject.timeline}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Budget</h4>
                <p className="text-sm text-muted-foreground">€{mockProject.budget}</p>
              </div>
            </div>
          </div>

          {/* Previous Reviews */}
          {mockProject.reviews.length > 0 && (
            <div className="space-y-4">
              <h4 className="font-medium">Previous Reviews</h4>
              <div className="space-y-4">
                {mockProject.reviews.map((review) => (
                  <div key={review.id} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{review.adminName}</span>
                      <ProjectStatusBadge status={review.decision === 'approved' ? 'approved' : 'rejected'} />
                    </div>
                    <p className="text-sm text-muted-foreground">{review.comment}</p>
                    <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Review Section */}
          <div className="space-y-4 pt-4 border-t">
            <h4 className="font-medium">Review Comments</h4>
            <Textarea
              placeholder="Add your review comments..."
              className="min-h-[100px]"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex items-center gap-4">
              <div className="flex-1 rounded-lg border p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="hourglass" className="h-4 w-4" />
                  Awaiting review from 2 more admins
                </div>
              </div>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="text-red-500 hover:text-red-600">
                    <Icon name="x" className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Reject Project?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to reject this project? This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleReview('rejected')}
                      className="bg-red-500 hover:bg-red-600"
                    >
                      Reject Project
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Button
                onClick={() => handleReview('approved')}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Icon name="loader-2" className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Icon name="check" className="mr-2 h-4 w-4" />
                    Approve
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}