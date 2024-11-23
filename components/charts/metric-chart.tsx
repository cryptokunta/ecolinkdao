"use client"

import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
import { Card } from '@/components/ui/card'

Chart.register(...registerables)

interface MetricChartProps {
  title: string
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor?: string
      borderColor?: string
    }[]
  }
  type: 'line' | 'bar' | 'pie'
  height?: number
}

export function MetricChart({ title, data, type, height = 300 }: MetricChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    // Create new chart
    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    chartInstance.current = new Chart(ctx, {
      type,
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          },
          title: {
            display: true,
            text: title
          }
        }
      }
    })

    // Cleanup on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [data, title, type])

  return (
    <Card className="p-4">
      <div style={{ height: `${height}px` }}>
        <canvas ref={chartRef} />
      </div>
    </Card>
  )
}