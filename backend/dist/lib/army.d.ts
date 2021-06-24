import { Dragon } from "./dragon";
import { Soldier } from "./soldier";
export declare class Army implements ArmyInterface {
    private dragon;
    private soldier;
    constructor(dragon: Dragon, soldier: Soldier);
    getTotal(army: number): number;
}
