import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health.controller';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [HealthController],
})
export class AppModule {} 