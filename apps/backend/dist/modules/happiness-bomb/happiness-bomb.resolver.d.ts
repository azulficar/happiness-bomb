import { HappinessBombService } from './happiness-bomb.service';
import { CreateHappinessBombInput } from './dto/create-happiness-bomb.input';
export declare class HappinessBombResolver {
    private readonly happinessBombService;
    constructor(happinessBombService: HappinessBombService);
    happinessBomb(id: string): Promise<{
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
    }>;
    mySentBombs(user: any): Promise<({
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
    myReceivedBombs(user: any): Promise<({
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
    createHappinessBomb(user: any, createHappinessBombInput: CreateHappinessBombInput): Promise<{
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
    }>;
    sendHappinessBomb(user: any, id: string): Promise<{
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
    }>;
}
