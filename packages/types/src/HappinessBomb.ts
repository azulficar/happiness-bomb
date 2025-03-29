export enum BombStatus {
  DRAFT = 'DRAFT',
  READY = 'READY',
  SENT = 'SENT'
}

export interface HappinessBomb {
  id: string;
  title: string;
  description?: string | null;
  creatorId: string;
  recipientId: string;
  scheduledSendTime?: Date | null;
  sentAt?: Date | null;
  status: BombStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface HappinessBombCreateInput {
  title: string;
  description?: string;
  recipientId: string;
  scheduledSendTime?: Date;
}

export interface HappinessBombUpdateInput {
  title?: string;
  description?: string | null;
  scheduledSendTime?: Date | null;
  status?: BombStatus;
} 