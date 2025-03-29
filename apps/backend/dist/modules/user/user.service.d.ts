import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    createUser(data: {
        name: string;
        email: string;
        profileImageUrl?: string;
        phoneNumber?: string;
    }): Promise<User>;
    updateUser(id: string, data: Partial<User>): Promise<User>;
    findUserSentBombs(userId: string): Promise<({
        recipient: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            externalId: string | null;
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
    })[]>;
    findUserReceivedBombs(userId: string): Promise<({
        creator: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            externalId: string | null;
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
    })[]>;
}
