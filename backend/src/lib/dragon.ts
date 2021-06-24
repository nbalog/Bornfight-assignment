import { Functions } from "./abstract/functions";

export class Dragon extends Functions implements DragonInterface {

  constructor() {
    super();
  }

  public getDragons() {
    const dragon = new Dragon;
    return dragon.getRandomInt(100, 1000);
  }

  public getDragonCoef(army: number) {
    return +army * 10 / 100;
  }
}
