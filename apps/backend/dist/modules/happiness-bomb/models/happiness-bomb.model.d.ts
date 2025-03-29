import { UserModel } from '../../user/models/user.model';
import { BombStatus } from '@prisma/client';
export declare class HappinessBombModel {
    id: string;
    title: string;
    description?: string;
    creatorId: string;
    recipientId: string;
    scheduledSendTime?: Date;
    sentAt?: Date;
    status: BombStatus;
    createdAt: Date;
    updatedAt: Date;
    creator?: UserModel;
    recipient?: UserModel;
}
