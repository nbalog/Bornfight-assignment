import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Army } from './lib/army';
import { Battle } from './lib/battle';
import { Dragon } from './lib/dragon';
import { Soldier } from './lib/soldier';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Battle, Army, Dragon, Soldier]
})
export class AppModule {}
