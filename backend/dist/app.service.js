"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
class AppService {
    constructor() {
        this.dragons_army_1 = 0;
        this.dragons_army_2 = 0;
        this.dragons_coefficient_army_1 = 0;
        this.dragons_coefficient_army_2 = 0;
        this.total_army_1 = 0;
        this.total_army_2 = 0;
    }
    battle(army1, army2) {
        this.dragons_army_1 = this.getRandomInt(100, 1000);
        this.dragons_army_2 = this.getRandomInt(100, 1000);
        this.dragons_coefficient_army_1 = +army1 * 10 / 100;
        this.dragons_coefficient_army_2 = +army2 * 10 / 100;
        this.total_army_1 = +army1 + (this.dragons_army_1 * this.dragons_coefficient_army_1);
        this.total_army_2 = +army2 + (this.dragons_army_2 * this.dragons_coefficient_army_2);
        const result = this.total_army_1 > this.total_army_2 ? "Army 1" : "Army 2";
        return result;
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map