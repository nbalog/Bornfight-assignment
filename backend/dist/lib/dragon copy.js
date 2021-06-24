"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dragon = void 0;
class Dragon {
    getDragons() {
        return this.getRandomInt(100, 1000);
    }
    getDragonCoef(army) {
        return +army * 10 / 100;
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}
exports.Dragon = Dragon;
//# sourceMappingURL=dragon%20copy.js.map