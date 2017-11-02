"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GroupByPipe = (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (collection, term) {
        var _this = this;
        var newValue = [];
        collection.forEach(function (col) {
            var keyVal = _this.deepFind(col, term);
            var index = newValue.findIndex(function (myObj) { return myObj.key === keyVal; });
            if (index >= 0) {
                newValue[index].value.push(col);
            }
            else {
                newValue.push({ key: keyVal, value: [col] });
            }
        });
        return newValue;
    };
    GroupByPipe.prototype.deepFind = function (obj, path) {
        var paths = path.toString().split(/[.\[\]]/);
        var current = obj;
        paths.forEach(function (onePath) {
            if (onePath !== '') {
                if (!current[onePath]) {
                    return undefined;
                }
                else {
                    current = current[onePath];
                }
            }
        });
        return current;
    };
    return GroupByPipe;
}());
GroupByPipe = __decorate([
    core_1.Pipe({
        name: 'groupBy'
    })
], GroupByPipe);
exports.GroupByPipe = GroupByPipe;
//# sourceMappingURL=group-by.pipe.js.map