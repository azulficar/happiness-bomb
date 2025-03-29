import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async createUser(data: { name: string; email: string; profileImageUrl?: string; phoneNumber?: string }): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async findUserSentBombs(userId: string) {
    return this.prisma.happinessBomb.findMany({
      where: { creatorId: userId },
      include: {
        recipient: true,
      },
    });
  }

  async findUserReceivedBombs(userId: string) {
    return this.prisma.happinessBomb.findMany({
      where: { recipientId: userId },
      include: {
        creator: true,
      },
    });
  }
} 