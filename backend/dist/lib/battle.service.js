"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleService = void 0;
class BattleService {
    constructor(army) {
        this.army = army;
        this.total_army_1 = 0;
        this.total_army_2 = 0;
    }
    resolveBattle(army1, army2) {
        this.total_army_1 = this.army.getTotal(army1);
        this.total_army_2 = this.army.getTotal(army2);
        const result = this.total_army_1 > this.total_army_2 ? "Army 1" : "Army 2";
        return result;
    }
}
exports.BattleService = BattleService;
//# sourceMappingURL=battle.service.js.map