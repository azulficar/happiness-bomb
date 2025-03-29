import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserModel } from './models/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../common/guards/auth.guard';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserModel, { nullable: true })
  async user(@Args('id') id: string) {
    return this.userService.findById(id);
  }

  @Query(() => UserModel, { nullable: true })
  async userByEmail(@Args('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Query(() => UserModel, { nullable: true })
  @UseGuards(AuthGuard)
  async me(@CurrentUser() user: any) {
    return user;
  }

  @Query(() => [UserModel])
  @UseGuards(AuthGuard)
  async userSentBombs(@CurrentUser() user: any) {
    return this.userService.findUserSentBombs(user.id);
  }

  @Query(() => [UserModel])
  @UseGuards(AuthGuard)
  async userReceivedBombs(@CurrentUser() user: any) {
    return this.userService.findUserReceivedBombs(user.id);
  }

  @Mutation(() => UserModel)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser({
      ...createUserInput,
      externalId: null,
    });
  }

  @Mutation(() => UserModel)
  @UseGuards(AuthGuard)
  async updateUser(
    @CurrentUser() user: any,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.userService.updateUser(user.id, updateUserInput);
  }
} 