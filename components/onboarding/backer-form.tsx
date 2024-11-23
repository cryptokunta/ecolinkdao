"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icons"

const steps = [
  {
    id: "organization",
    title: "Organization Details",
    fields: ["name", "type", "mission"]
  },
  {
    id: "interests",
    title: "Impact Areas",
    fields: ["focus", "resources", "expectations"]
  },
  {
    id: "verification",
    title: "Verification",
    fields: ["documents", "references"]
  }
]

export function BackerForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})

  return (
    <Card>
      <CardHeader>
        <CardTitle>Backer Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Progress indicator */}
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex items-center"
              >
                <div className={`
                  rounded-full h-8 w-8 flex items-center justify-center
                  ${index <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted'}
                `}>
                  {index < currentStep ? (
                    <Icon name="check" className="h-4 w-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`
                    h-1 w-12 mx-2
                    ${index < currentStep ? 'bg-primary' : 'bg-muted'}
                  `} />
                )}
              </div>
            ))}
          </div>

          {/* Form steps */}
          <div className="min-h-[400px]">
            {/* Implement form fields for each step */}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button
              onClick={() => {
                if (currentStep < steps.length - 1) {
                  setCurrentStep(currentStep + 1)
                } else {
                  // Submit form
                }
              }}
            >
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}