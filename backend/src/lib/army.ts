import { Injectable } from "@nestjs/common";
import { Dragon } from "./dragon";
import { Soldier } from "./soldier";

@Injectable()
export class Army implements ArmyInterface {

  constructor(private dragon: Dragon, private soldier: Soldier) {}

  public getTotal(army: number) {
    return +army - this.soldier.disease(army) + (this.dragon.getDragons() * this.dragon.getDragonCoef(army));
  }

}
