export type ProjectStatus = 'draft' | 'pending' | 'approved' | 'rejected'

export interface Project {
  id: string
  title: string
  category: string
  description: string
  goals: string
  resources: string
  timeline: string
  budget: number
  status: ProjectStatus
  submittedBy: string
  submittedDate: string
  reviews: ProjectReview[]
}

export interface ProjectReview {
  id: string
  adminId: string
  adminName: string
  comment: string
  decision: 'approved' | 'rejected'
  date: string
}

export interface ProjectFormData {
  title: string
  category: string
  description: string
  goals: string
  resources: string
  timeline: string
  budget: string
}