"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
const common_1 = require("@nestjs/common");
const army_1 = require("./army");
let Battle = class Battle {
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
};
Battle = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [army_1.Army])
], Battle);
exports.Battle = Battle;
//# sourceMappingURL=battle.js.map