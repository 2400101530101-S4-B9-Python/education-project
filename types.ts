
export enum UserRole {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
  ADMIN = 'ADMIN'
}

export enum DoubtStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  LIVE = 'LIVE',
  COMPLETED = 'COMPLETED'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
}

export interface DoubtRequest {
  id: string;
  studentId: string;
  studentName: string;
  subject: string;
  description: string;
  imageUrl?: string;
  audioUrl?: string;
  status: DoubtStatus;
  createdAt: number;
  acceptedBy?: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
}
