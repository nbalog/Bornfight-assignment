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
exports.Army = void 0;
const common_1 = require("@nestjs/common");
const dragon_1 = require("./dragon");
const soldier_1 = require("./soldier");
let Army = class Army {
    constructor(dragon, soldier) {
        this.dragon = dragon;
        this.soldier = soldier;
    }
    getTotal(army) {
        return +army - this.soldier.disease(army) + (this.dragon.getDragons() * this.dragon.getDragonCoef(army));
    }
};
Army = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [dragon_1.Dragon, soldier_1.Soldier])
], Army);
exports.Army = Army;
//# sourceMappingURL=army.js.map