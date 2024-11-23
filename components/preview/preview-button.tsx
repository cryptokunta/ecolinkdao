"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { PreviewModal } from "./preview-modal"
import { PreviewIframe } from "./preview-iframe"

interface PreviewButtonProps {
  html: string
}

export function PreviewButton({ html }: PreviewButtonProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setIsPreviewOpen(true)}
        className="gap-2"
      >
        <Eye className="h-4 w-4" />
        Preview
      </Button>

      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      >
        <PreviewIframe html={html} />
      </PreviewModal>
    </>
  )
}