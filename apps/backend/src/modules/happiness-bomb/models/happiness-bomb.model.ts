import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { UserModel } from '../../user/models/user.model';
import { BombStatus } from '@prisma/client';

registerEnumType(BombStatus, {
  name: 'BombStatus',
  description: 'Status of a happiness bomb',
});

@ObjectType()
export class HappinessBombModel {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creatorId: string;

  @Field()
  recipientId: string;

  @Field({ nullable: true })
  scheduledSendTime?: Date;

  @Field({ nullable: true })
  sentAt?: Date;

  @Field(() => BombStatus)
  status: BombStatus;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => UserModel)
  creator?: UserModel;

  @Field(() => UserModel)
  recipient?: UserModel;
} 