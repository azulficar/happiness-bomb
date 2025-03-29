interface User {
    id: string;
    name: string;
    email: string;
    phoneNumber?: string | null;
    profileImageUrl?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
interface UserCreateInput {
    name: string;
    email: string;
    phoneNumber?: string;
    profileImageUrl?: string;
}
interface UserUpdateInput {
    name?: string;
    email?: string;
    phoneNumber?: string | null;
    profileImageUrl?: string | null;
}

declare enum BombStatus {
    DRAFT = "DRAFT",
    READY = "READY",
    SENT = "SENT"
}
interface HappinessBomb {
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
interface HappinessBombCreateInput {
    title: string;
    description?: string;
    recipientId: string;
    scheduledSendTime?: Date;
}
interface HappinessBombUpdateInput {
    title?: string;
    description?: string | null;
    scheduledSendTime?: Date | null;
    status?: BombStatus;
}

interface Contribution {
    id: string;
    bombId: string;
    contributorId: string;
    message: string;
    photos: string[];
    createdAt: Date;
    updatedAt: Date;
    hiddenByContributor: boolean;
}
interface ContributionCreateInput {
    bombId: string;
    message: string;
    photos?: string[];
}
interface ContributionUpdateInput {
    message?: string;
    photos?: string[];
    hiddenByContributor?: boolean;
}

export { BombStatus, Contribution, ContributionCreateInput, ContributionUpdateInput, HappinessBomb, HappinessBombCreateInput, HappinessBombUpdateInput, User, UserCreateInput, UserUpdateInput };
