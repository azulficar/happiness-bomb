import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    user(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        phoneNumber: string | null;
        profileImageUrl: string | null;
    }>;
    userByEmail(email: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        phoneNumber: string | null;
        profileImageUrl: string | null;
    }>;
    userSentBombs(userId: string): Promise<({
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
    })[]>;
    userReceivedBombs(userId: string): Promise<({
        creator: {
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
    })[]>;
    createUser(createUserInput: CreateUserInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        phoneNumber: string | null;
        profileImageUrl: string | null;
    }>;
    updateUser(id: string, updateUserInput: UpdateUserInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        phoneNumber: string | null;
        profileImageUrl: string | null;
    }>;
}
