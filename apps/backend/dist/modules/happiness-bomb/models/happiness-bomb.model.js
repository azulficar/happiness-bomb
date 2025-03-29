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
exports.HappinessBombModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("../../user/models/user.model");
const client_1 = require("@prisma/client");
(0, graphql_1.registerEnumType)(client_1.BombStatus, {
    name: 'BombStatus',
    description: 'Status of a happiness bomb',
});
let HappinessBombModel = class HappinessBombModel {
};
exports.HappinessBombModel = HappinessBombModel;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], HappinessBombModel.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], HappinessBombModel.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HappinessBombModel.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], HappinessBombModel.prototype, "creatorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], HappinessBombModel.prototype, "recipientId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], HappinessBombModel.prototype, "scheduledSendTime", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], HappinessBombModel.prototype, "sentAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.BombStatus),
    __metadata("design:type", String)
], HappinessBombModel.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], HappinessBombModel.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], HappinessBombModel.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.UserModel),
    __metadata("design:type", user_model_1.UserModel)
], HappinessBombModel.prototype, "creator", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.UserModel),
    __metadata("design:type", user_model_1.UserModel)
], HappinessBombModel.prototype, "recipient", void 0);
exports.HappinessBombModel = HappinessBombModel = __decorate([
    (0, graphql_1.ObjectType)()
], HappinessBombModel);
//# sourceMappingURL=happiness-bomb.model.js.map