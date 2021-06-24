import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('battle') 
  async find(
    @Query('army1') army1: number,
    @Query('army2') army2: number
  ) {
    return this.battle(army1,army2);
  }

  private battle(army1: number, army2: number) {
    return this.appService.onBattle(army1, army2);
  }
}
