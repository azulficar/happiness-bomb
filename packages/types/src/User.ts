export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string | null;
  profileImageUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreateInput {
  name: string;
  email: string;
  phoneNumber?: string;
  profileImageUrl?: string;
}

export interface UserUpdateInput {
  name?: string;
  email?: string;
  phoneNumber?: string | null;
  profileImageUrl?: string | null;
} 