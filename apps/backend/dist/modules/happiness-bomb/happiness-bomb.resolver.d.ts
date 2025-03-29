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
    createHappinessBomb(creatorId: string, createHappinessBombInput: CreateHappinessBombInput): Promise<{
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
