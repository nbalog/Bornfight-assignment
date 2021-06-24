import { Army } from "./army";
export declare class Battle implements BattleInterface {
    private readonly army;
    total_army_1: number;
    total_army_2: number;
    constructor(army: Army);
    resolveBattle(army1: number, army2: number): "Army 1" | "Army 2";
}
