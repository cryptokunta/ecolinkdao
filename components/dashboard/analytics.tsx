"use client"

import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Icon } from '@/components/ui/icons'
import { useTheme } from 'next-themes'
import { Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export function AnalyticsGraphs() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: t('analytics.projectProgress'),
        data: [65, 72, 86, 81, 90, 95],
        borderColor: 'hsl(var(--primary))',
        backgroundColor: 'hsl(var(--primary) / 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">{t('analytics.title')}</h2>
        <Tabs defaultValue="progress">
          <TabsList>
            <TabsTrigger value="progress">
              <Icon name="line-chart" className="h-4 w-4 mr-2" />
              {t('analytics.tabs.progress')}
            </TabsTrigger>
            <TabsTrigger value="distribution">
              <Icon name="bar-chart" className="h-4 w-4 mr-2" />
              {t('analytics.tabs.distribution')}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="h-[300px]">
        <TabsContent value="progress" className="h-full">
          <Line data={chartData} options={options} />
        </TabsContent>
        <TabsContent value="distribution" className="h-full">
          <Bar data={chartData} options={options} />
        </TabsContent>
      </div>
    </Card>
  )
}