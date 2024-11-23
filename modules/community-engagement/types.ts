export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member';
  joinedAt: Date;
  lastActive: Date;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  organizer: Member;
  participants: Member[];
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface EngagementMetric {
  memberId: string;
  eventParticipation: number;
  contributionCount: number;
  reputationScore: number;
  lastUpdated: Date;
}