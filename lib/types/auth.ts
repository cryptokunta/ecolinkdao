export type UserRole = 'admin' | 'member' | 'contributor' | 'observer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  permissions: Permission[];
  lastActive: Date;
}

export interface Permission {
  resource: string;
  actions: ('create' | 'read' | 'update' | 'delete')[];
}

export interface Session {
  user: User;
  expires: Date;
  accessToken: string;
}