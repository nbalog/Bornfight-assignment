import { Injectable } from '@nestjs/common';
import { Battle } from './lib/battle';

@Injectable()
export class AppService {

  constructor(private readonly battle: Battle) {}

  public onBattle(army1: number, army2: number) {
    return this.battle.resolveBattle(army1, army2);
  }
}
