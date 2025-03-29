import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { HappinessBombService } from './happiness-bomb.service';
import { HappinessBombModel } from './models/happiness-bomb.model';
import { CreateHappinessBombInput } from './dto/create-happiness-bomb.input';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { AuthGuard } from '../../common/guards/auth.guard';

@Resolver(() => HappinessBombModel)
export class HappinessBombResolver {
  constructor(private readonly happinessBombService: HappinessBombService) {}

  @Query(() => HappinessBombModel, { nullable: true })
  async happinessBomb(@Args('id') id: string) {
    return this.happinessBombService.findById(id);
  }

  @Query(() => [HappinessBombModel])
  @UseGuards(AuthGuard)
  async mySentBombs(@CurrentUser() user: any) {
    return this.happinessBombService.findSentBombs(user.id);
  }

  @Query(() => [HappinessBombModel])
  @UseGuards(AuthGuard)
  async myReceivedBombs(@CurrentUser() user: any) {
    return this.happinessBombService.findReceivedBombs(user.id);
  }

  @Mutation(() => HappinessBombModel)
  @UseGuards(AuthGuard)
  async createHappinessBomb(
    @CurrentUser() user: any,
    @Args('createHappinessBombInput') createHappinessBombInput: CreateHappinessBombInput,
  ) {
    const input = {
      ...createHappinessBombInput,
      scheduledSendTime: createHappinessBombInput.scheduledSendTime 
        ? new Date(createHappinessBombInput.scheduledSendTime) 
        : undefined,
    };
    
    return this.happinessBombService.createHappinessBomb(user.id, input);
  }

  @Mutation(() => HappinessBombModel)
  @UseGuards(AuthGuard)
  async sendHappinessBomb(
    @CurrentUser() user: any,
    @Args('id') id: string
  ) {
    // Verify the user owns the bomb
    const bomb = await this.happinessBombService.findById(id);
    if (!bomb || bomb.creatorId !== user.id) {
      throw new Error('Not authorized to send this bomb');
    }
    
    return this.happinessBombService.sendHappinessBomb(id);
  }
} 