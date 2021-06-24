import { Battle } from './lib/battle';
export declare class AppService {
    private readonly battle;
    constructor(battle: Battle);
    onBattle(army1: number, army2: number): "Army 1" | "Army 2";
}
