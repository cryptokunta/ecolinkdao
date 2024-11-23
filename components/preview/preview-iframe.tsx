"use client"

import { useEffect, useRef } from "react"

interface PreviewIframeProps {
  html: string
}

export function PreviewIframe({ html }: PreviewIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current
      const doc = iframe.contentDocument || iframe.contentWindow?.document

      if (doc) {
        doc.open()
        doc.write(html)
        doc.close()
      }
    }
  }, [html])

  return (
    <iframe
      ref={iframeRef}
      className="w-full h-full border-0"
      title="Preview"
      sandbox="allow-same-origin allow-scripts"
    />
  )
}