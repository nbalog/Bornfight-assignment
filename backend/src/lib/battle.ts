import { Injectable } from "@nestjs/common";
import { Army } from "./army";

@Injectable()
export class Battle implements BattleInterface {

  total_army_1 = 0;
  total_army_2 = 0;

  constructor(private readonly army: Army) {}

  public resolveBattle(army1: number, army2: number) {
    this.total_army_1 = this.army.getTotal(army1);
    this.total_army_2 = this.army.getTotal(army2);
    const result = this.total_army_1 > this.total_army_2 ? "Army 1" : "Army 2";
    
    return result;
  }
}
