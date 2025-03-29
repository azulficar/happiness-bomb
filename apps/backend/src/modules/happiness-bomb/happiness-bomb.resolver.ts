import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HappinessBombService } from './happiness-bomb.service';
import { HappinessBombModel } from './models/happiness-bomb.model';
import { CreateHappinessBombInput } from './dto/create-happiness-bomb.input';

@Resolver(() => HappinessBombModel)
export class HappinessBombResolver {
  constructor(private readonly happinessBombService: HappinessBombService) {}

  @Query(() => HappinessBombModel, { nullable: true })
  async happinessBomb(@Args('id') id: string) {
    return this.happinessBombService.findById(id);
  }

  @Mutation(() => HappinessBombModel)
  async createHappinessBomb(
    @Args('creatorId') creatorId: string,
    @Args('createHappinessBombInput') createHappinessBombInput: CreateHappinessBombInput,
  ) {
    const input = {
      ...createHappinessBombInput,
      scheduledSendTime: createHappinessBombInput.scheduledSendTime 
        ? new Date(createHappinessBombInput.scheduledSendTime) 
        : undefined,
    };
    
    return this.happinessBombService.createHappinessBomb(creatorId, input);
  }

  @Mutation(() => HappinessBombModel)
  async sendHappinessBomb(@Args('id') id: string) {
    return this.happinessBombService.sendHappinessBomb(id);
  }
} 