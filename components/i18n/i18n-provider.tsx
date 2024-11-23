"use client"

import { I18nextProvider as Provider } from 'react-i18next'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          dashboard: {
            welcome: 'Welcome, {{name}}',
            subtitle: 'Track your impact and manage resources effectively',
            actions: {
              createProject: 'Create Project',
              viewTasks: 'View Tasks',
              analytics: 'Analytics'
            }
          },
          metrics: {
            activeProjects: 'Active Projects',
            tasksCompleted: 'Tasks Completed',
            teamMembers: 'Team Members',
            efficiency: 'Efficiency',
            vsLastMonth: 'vs last month'
          },
          tasks: {
            title: 'Task Board',
            status: {
              todo: 'To Do',
              inProgress: 'In Progress',
              completed: 'Completed'
            }
          },
          analytics: {
            title: 'Analytics',
            projectProgress: 'Project Progress',
            tabs: {
              progress: 'Progress',
              distribution: 'Distribution'
            }
          }
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export function I18nextProvider({ children }: { children: React.ReactNode }) {
  return <Provider i18n={i18n}>{children}</Provider>
}