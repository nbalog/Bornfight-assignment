"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Functions = void 0;
class Functions {
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}
exports.Functions = Functions;
//# sourceMappingURL=functions.js.map