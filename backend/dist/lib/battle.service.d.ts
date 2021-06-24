import { Army } from "./army";
export declare class BattleService {
    private readonly army;
    private total_army_1;
    private total_army_2;
    constructor(army: Army);
    resolveBattle(army1: number, army2: number): "Army 1" | "Army 2";
}
