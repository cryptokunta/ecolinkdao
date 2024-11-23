"use client"

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Icon } from '@/components/ui/icons'

interface Task {
  id: string
  title: string
  priority: 'low' | 'medium' | 'high'
  assignee: {
    name: string
    avatar: string
  }
  dueDate: string
}

interface Column {
  id: string
  title: string
  tasks: Task[]
}

export function TaskBoard() {
  const { t } = useTranslation()
  const [columns, setColumns] = useState<Column[]>([
    {
      id: 'todo',
      title: t('tasks.status.todo'),
      tasks: [
        {
          id: '1',
          title: 'Review project proposals',
          priority: 'high',
          assignee: {
            name: 'Alex Kim',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
          },
          dueDate: '2024-02-25'
        }
      ]
    },
    {
      id: 'in_progress',
      title: t('tasks.status.inProgress'),
      tasks: []
    },
    {
      id: 'completed',
      title: t('tasks.status.completed'),
      tasks: []
    }
  ])

  const onDragEnd = (result: any) => {
    if (!result.destination) return

    const { source, destination } = result
    const newColumns = [...columns]
    const sourceCol = newColumns.find(col => col.id === source.droppableId)
    const destCol = newColumns.find(col => col.id === destination.droppableId)
    
    if (sourceCol && destCol) {
      const [movedTask] = sourceCol.tasks.splice(source.index, 1)
      destCol.tasks.splice(destination.index, 0, movedTask)
      setColumns(newColumns)
    }
  }

  return (
    <Card className="p-6">
      <h2 className="font-semibold text-lg mb-4">{t('tasks.title')}</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {columns.map(column => (
            <div key={column.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-sm text-muted-foreground">
                  {column.title}
                </h3>
                <Badge variant="secondary">
                  {column.tasks.length}
                </Badge>
              </div>
              
              <Droppable droppableId={column.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="space-y-2 min-h-[200px]"
                  >
                    {column.tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-card border rounded-lg p-3 shadow-sm"
                          >
                            <div className="flex items-start justify-between">
                              <p className="text-sm font-medium">
                                {task.title}
                              </p>
                              <Badge
                                variant={
                                  task.priority === 'high' ? 'destructive' :
                                  task.priority === 'medium' ? 'default' :
                                  'secondary'
                                }
                              >
                                {task.priority}
                              </Badge>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={task.assignee.avatar} />
                                <AvatarFallback>
                                  {task.assignee.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Icon name="calendar" className="mr-1 h-3 w-3" />
                                {task.dueDate}
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </Card>
  )
}