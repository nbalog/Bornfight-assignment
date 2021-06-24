"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dragon = void 0;
const functions_1 = require("./abstract/functions");
class Dragon extends functions_1.Functions {
    constructor() {
        super();
    }
    getDragons() {
        const dragon = new Dragon;
        return dragon.getRandomInt(100, 1000);
    }
    getDragonCoef(army) {
        return +army * 10 / 100;
    }
}
exports.Dragon = Dragon;
//# sourceMappingURL=dragon.js.map