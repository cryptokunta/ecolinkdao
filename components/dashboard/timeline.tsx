"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Icon } from "@/components/ui/icons"

const timelineItems = [
  {
    date: "2024 Q1",
    title: "Community Launch",
    description: "Initial platform release with core features.",
    icon: "rocket",
    status: "completed"
  },
  {
    date: "2024 Q2",
    title: "Resource Management",
    description: "Advanced resource tracking systems.",
    icon: "database",
    status: "in-progress"
  },
  {
    date: "2024 Q3",
    title: "Impact Metrics",
    description: "Comprehensive impact measurement.",
    icon: "bar-chart",
    status: "upcoming"
  },
  {
    date: "2024 Q4",
    title: "Global Expansion",
    description: "Platform scaling and support.",
    icon: "globe",
    status: "upcoming"
  }
]

export function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = document.querySelectorAll(".scroll-trigger")
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <Card className="p-4" ref={timelineRef}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Project Timeline</h3>
        <div className="flex gap-2">
          {["completed", "in-progress", "upcoming"].map((status) => (
            <div key={status} className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${
                status === "completed" ? "bg-green-500" :
                status === "in-progress" ? "bg-blue-500" :
                "bg-gray-300"
              }`} />
              <span className="text-xs text-muted-foreground capitalize">{status}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {timelineItems.map((item, index) => (
          <div
            key={item.title}
            className="scroll-trigger flex-shrink-0 w-[240px]"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors h-full">
              <div className="flex items-center gap-2 mb-3">
                <div className={`rounded-full p-2 ${
                  item.status === "completed" ? "bg-green-100 text-green-600" :
                  item.status === "in-progress" ? "bg-blue-100 text-blue-600" :
                  "bg-gray-100 text-gray-600"
                }`}>
                  <Icon name={item.icon} className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">{item.date}</span>
              </div>
              <h4 className="font-medium mb-2 line-clamp-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}