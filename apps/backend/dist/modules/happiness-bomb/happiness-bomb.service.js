"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HappinessBombService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let HappinessBombService = class HappinessBombService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findById(id) {
        return this.prisma.happinessBomb.findUnique({
            where: { id },
            include: {
                creator: true,
                recipient: true,
            },
        });
    }
    async findSentBombs(userId) {
        return this.prisma.happinessBomb.findMany({
            where: { creatorId: userId },
            include: {
                creator: true,
                recipient: true,
            },
        });
    }
    async findReceivedBombs(userId) {
        return this.prisma.happinessBomb.findMany({
            where: { recipientId: userId },
            include: {
                creator: true,
                recipient: true,
            },
        });
    }
    async createHappinessBomb(creatorId, data) {
        return this.prisma.happinessBomb.create({
            data: {
                ...data,
                creatorId,
                status: client_1.BombStatus.DRAFT,
            },
            include: {
                creator: true,
                recipient: true,
            },
        });
    }
    async updateHappinessBomb(id, data) {
        return this.prisma.happinessBomb.update({
            where: { id },
            data,
            include: {
                creator: true,
                recipient: true,
            },
        });
    }
    async sendHappinessBomb(id) {
        return this.prisma.happinessBomb.update({
            where: { id },
            data: {
                status: client_1.BombStatus.SENT,
                sentAt: new Date(),
            },
            include: {
                creator: true,
                recipient: true,
            },
        });
    }
};
exports.HappinessBombService = HappinessBombService;
exports.HappinessBombService = HappinessBombService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HappinessBombService);
//# sourceMappingURL=happiness-bomb.service.js.map