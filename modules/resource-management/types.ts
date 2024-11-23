export interface Resource {
  id: string;
  name: string;
  type: 'financial' | 'human' | 'material';
  quantity: number;
  unit: string;
  status: 'available' | 'allocated' | 'depleted';
  lastUpdated: Date;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: 'planning' | 'active' | 'completed';
  resources: ResourceAllocation[];
}

export interface ResourceAllocation {
  resourceId: string;
  projectId: string;
  quantity: number;
  allocationDate: Date;
  status: 'pending' | 'approved' | 'rejected';
}