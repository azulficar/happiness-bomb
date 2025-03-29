import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserModel } from './models/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

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

  @Query(() => [UserModel])
  async userSentBombs(@Args('userId') userId: string) {
    return this.userService.findUserSentBombs(userId);
  }

  @Query(() => [UserModel])
  async userReceivedBombs(@Args('userId') userId: string) {
    return this.userService.findUserReceivedBombs(userId);
  }

  @Mutation(() => UserModel)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }

  @Mutation(() => UserModel)
  async updateUser(
    @Args('id') id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.userService.updateUser(id, updateUserInput);
  }
} 