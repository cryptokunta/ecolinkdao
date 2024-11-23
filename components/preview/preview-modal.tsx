"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Maximize2, Minimize2, X } from "lucide-react"

interface PreviewModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function PreviewModal({ isOpen, onClose, children }: PreviewModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${isFullscreen ? 'w-screen h-screen max-w-none m-0 rounded-none' : ''}`}>
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Preview</DialogTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        <div className={`mt-4 ${isFullscreen ? 'h-[calc(100vh-8rem)]' : 'h-[600px]'}`}>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  )
}