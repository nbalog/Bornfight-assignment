"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soldier = void 0;
const functions_1 = require("./abstract/functions");
class Soldier extends functions_1.Functions {
    constructor() {
        super();
    }
    disease(army) {
        const soldier = new Soldier();
        const infectedSoldiers = soldier.getRandomInt(1, army);
        return infectedSoldiers;
    }
}
exports.Soldier = Soldier;
//# sourceMappingURL=soldier.js.map