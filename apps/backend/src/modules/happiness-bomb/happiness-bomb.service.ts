import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BombStatus } from '@prisma/client';

@Injectable()
export class HappinessBombService {
  constructor(private prisma: PrismaService) {}

  async findById(id: string) {
    return this.prisma.happinessBomb.findUnique({
      where: { id },
      include: {
        creator: true,
        recipient: true,
      },
    });
  }

  async createHappinessBomb(creatorId: string, data: {
    title: string;
    description?: string;
    recipientId: string;
    scheduledSendTime?: Date;
  }) {
    return this.prisma.happinessBomb.create({
      data: {
        ...data,
        creatorId,
        status: BombStatus.DRAFT,
      },
      include: {
        creator: true,
        recipient: true,
      },
    });
  }

  async updateHappinessBomb(id: string, data: {
    title?: string;
    description?: string;
    scheduledSendTime?: Date;
    status?: BombStatus;
  }) {
    return this.prisma.happinessBomb.update({
      where: { id },
      data,
      include: {
        creator: true,
        recipient: true,
      },
    });
  }

  async sendHappinessBomb(id: string) {
    return this.prisma.happinessBomb.update({
      where: { id },
      data: {
        status: BombStatus.SENT,
        sentAt: new Date(),
      },
      include: {
        creator: true,
        recipient: true,
      },
    });
  }
} 