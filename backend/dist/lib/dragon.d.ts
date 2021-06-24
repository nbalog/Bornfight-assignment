import { Functions } from "./abstract/functions";
export declare class Dragon extends Functions implements DragonInterface {
    constructor();
    getDragons(): number;
    getDragonCoef(army: number): number;
}
