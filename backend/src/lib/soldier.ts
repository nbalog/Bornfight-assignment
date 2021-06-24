import { Functions } from "./abstract/functions";

export class Soldier extends Functions implements SoldierInterface {

  constructor() {
    super();
  }

  public disease(army: number) {
    const soldier = new Soldier();
    const infectedSoldiers = soldier.getRandomInt(1,army);
    return infectedSoldiers;
  }
}
