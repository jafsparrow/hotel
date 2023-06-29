import { User } from './user';

export interface PosSession {
  id: number;
  startTime: Date;
  endTime?: Date;
  status: SessionStatus;
  createdBy?: User;
}

export enum SessionStatus {
  ACTIVE = 'active',
  CLOSE = 'closed',
}
