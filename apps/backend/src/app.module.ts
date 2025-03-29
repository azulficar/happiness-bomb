import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health.controller';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { HappinessBombModule } from './modules/happiness-bomb/happiness-bomb.module';
import { join } from 'path';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({ isGlobal: true }),
    
    // GraphQL
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.graphql'),
      sortSchema: true,
      playground: true,
      introspection: true,
    }),
    
    // Database
    PrismaModule,
    
    // Feature modules
    UserModule,
    HappinessBombModule,
  ],
  controllers: [HealthController],
})
export class AppModule {} 