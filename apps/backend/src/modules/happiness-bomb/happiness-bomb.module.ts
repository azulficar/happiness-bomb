import { Module } from '@nestjs/common';
import { HappinessBombService } from './happiness-bomb.service';
import { HappinessBombResolver } from './happiness-bomb.resolver';

@Module({
  providers: [HappinessBombService, HappinessBombResolver],
  exports: [HappinessBombService],
})
export class HappinessBombModule {} 