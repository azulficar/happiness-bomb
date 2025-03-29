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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HappinessBombResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const happiness_bomb_service_1 = require("./happiness-bomb.service");
const happiness_bomb_model_1 = require("./models/happiness-bomb.model");
const create_happiness_bomb_input_1 = require("./dto/create-happiness-bomb.input");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const auth_guard_1 = require("../../common/guards/auth.guard");
let HappinessBombResolver = class HappinessBombResolver {
    constructor(happinessBombService) {
        this.happinessBombService = happinessBombService;
    }
    async happinessBomb(id) {
        return this.happinessBombService.findById(id);
    }
    async mySentBombs(user) {
        return this.happinessBombService.findSentBombs(user.id);
    }
    async myReceivedBombs(user) {
        return this.happinessBombService.findReceivedBombs(user.id);
    }
    async createHappinessBomb(user, createHappinessBombInput) {
        const input = {
            ...createHappinessBombInput,
            scheduledSendTime: createHappinessBombInput.scheduledSendTime
                ? new Date(createHappinessBombInput.scheduledSendTime)
                : undefined,
        };
        return this.happinessBombService.createHappinessBomb(user.id, input);
    }
    async sendHappinessBomb(user, id) {
        const bomb = await this.happinessBombService.findById(id);
        if (!bomb || bomb.creatorId !== user.id) {
            throw new Error('Not authorized to send this bomb');
        }
        return this.happinessBombService.sendHappinessBomb(id);
    }
};
exports.HappinessBombResolver = HappinessBombResolver;
__decorate([
    (0, graphql_1.Query)(() => happiness_bomb_model_1.HappinessBombModel, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HappinessBombResolver.prototype, "happinessBomb", null);
__decorate([
    (0, graphql_1.Query)(() => [happiness_bomb_model_1.HappinessBombModel]),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HappinessBombResolver.prototype, "mySentBombs", null);
__decorate([
    (0, graphql_1.Query)(() => [happiness_bomb_model_1.HappinessBombModel]),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HappinessBombResolver.prototype, "myReceivedBombs", null);
__decorate([
    (0, graphql_1.Mutation)(() => happiness_bomb_model_1.HappinessBombModel),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('createHappinessBombInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_happiness_bomb_input_1.CreateHappinessBombInput]),
    __metadata("design:returntype", Promise)
], HappinessBombResolver.prototype, "createHappinessBomb", null);
__decorate([
    (0, graphql_1.Mutation)(() => happiness_bomb_model_1.HappinessBombModel),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], HappinessBombResolver.prototype, "sendHappinessBomb", null);
exports.HappinessBombResolver = HappinessBombResolver = __decorate([
    (0, graphql_1.Resolver)(() => happiness_bomb_model_1.HappinessBombModel),
    __metadata("design:paramtypes", [happiness_bomb_service_1.HappinessBombService])
], HappinessBombResolver);
//# sourceMappingURL=happiness-bomb.resolver.js.map