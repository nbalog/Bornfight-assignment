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
        this.dragons_coefficient_army_1 = this.getCoefficient(army1);
        this.dragons_coefficient_army_2 = this.getCoefficient(army2);
        this.total_army_1 = this.getTotal(army1, this.dragons_army_1, this.dragons_coefficient_army_1);
        this.total_army_2 = this.getTotal(army2, this.dragons_army_2, this.dragons_coefficient_army_2);
        const result = this.total_army_1 > this.total_army_2 ? "Army 1" : "Army 2";
        return result;
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    getCoefficient(army) {
        return +army * 10 / 100;
    }
    getTotal(army, dragons, coefficient) {
        return +army + (dragons * coefficient);
    }
}
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map