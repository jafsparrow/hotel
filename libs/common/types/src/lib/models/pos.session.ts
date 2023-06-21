export interface PosSession {
  id: number;
  startTime: Date;
  endTime: Date;
  status: SessionStatus;
}

export enum SessionStatus {
  ACTIVE = 'active',
  CLOSE = 'closed',
}
