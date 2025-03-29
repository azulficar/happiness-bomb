import { PrismaService } from '../prisma/prisma.service';
import { BombStatus } from '@prisma/client';
export declare class HappinessBombService {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<{
        creator: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            phoneNumber: string | null;
            profileImageUrl: string | null;
        };
        recipient: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            phoneNumber: string | null;
            profileImageUrl: string | null;
        };
    } & {
        id: string;
        title: string;
        description: string | null;
        creatorId: string;
        recipientId: string;
        scheduledSendTime: Date | null;
        sentAt: Date | null;
        status: import(".prisma/client").$Enums.BombStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createHappinessBomb(creatorId: string, data: {
        title: string;
        description?: string;
        recipientId: string;
        scheduledSendTime?: Date;
    }): Promise<{
        creator: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            phoneNumber: string | null;
            profileImageUrl: string | null;
        };
        recipient: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            phoneNumber: string | null;
            profileImageUrl: string | null;
        };
    } & {
        id: string;
        title: string;
        description: string | null;
        creatorId: string;
        recipientId: string;
        scheduledSendTime: Date | null;
        sentAt: Date | null;
        status: import(".prisma/client").$Enums.BombStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateHappinessBomb(id: string, data: {
        title?: string;
        description?: string;
        scheduledSendTime?: Date;
        status?: BombStatus;
    }): Promise<{
        creator: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            phoneNumber: string | null;
            profileImageUrl: string | null;
        };
        recipient: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            phoneNumber: string | null;
            profileImageUrl: string | null;
        };
    } & {
        id: string;
        title: string;
        description: string | null;
        creatorId: string;
        recipientId: string;
        scheduledSendTime: Date | null;
        sentAt: Date | null;
        status: import(".prisma/client").$Enums.BombStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    sendHappinessBomb(id: string): Promise<{
        creator: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            phoneNumber: string | null;
            profileImageUrl: string | null;
        };
        recipient: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            phoneNumber: string | null;
            profileImageUrl: string | null;
        };
    } & {
        id: string;
        title: string;
        description: string | null;
        creatorId: string;
        recipientId: string;
        scheduledSendTime: Date | null;
        sentAt: Date | null;
        status: import(".prisma/client").$Enums.BombStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
