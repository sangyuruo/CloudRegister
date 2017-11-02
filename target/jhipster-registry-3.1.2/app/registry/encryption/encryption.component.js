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
var core_1 = require("@angular/core");
var encryption_service_1 = require("./encryption.service");
var JhiEncryptionComponent = (function () {
    function JhiEncryptionComponent(encryptionService) {
        this.encryptionService = encryptionService;
        this.showMore = true;
        this.textToEncrypt = '';
        this.encryptedText = '';
        this.result = '';
    }
    JhiEncryptionComponent.prototype.ngOnInit = function () {
    };
    JhiEncryptionComponent.prototype.ngOnDestroy = function () {
    };
    JhiEncryptionComponent.prototype.encrypt = function () {
        var _this = this;
        this.encryptionService.encrypt(this.textToEncrypt).subscribe(function (response) {
            _this.result = response;
            _this.encryptedText = response;
        }, function () {
            _this.result = '';
        });
    };
    JhiEncryptionComponent.prototype.decrypt = function () {
        var _this = this;
        this.encryptionService.decrypt(this.encryptedText).subscribe(function (response) {
            _this.result = response;
            _this.textToEncrypt = response;
        }, function () {
            _this.result = '';
        });
    };
    return JhiEncryptionComponent;
}());
JhiEncryptionComponent = __decorate([
    core_1.Component({
        selector: 'jhi-encryption',
        templateUrl: './encryption.component.html'
    }),
    __metadata("design:paramtypes", [encryption_service_1.JhiEncryptionService])
], JhiEncryptionComponent);
exports.JhiEncryptionComponent = JhiEncryptionComponent;
//# sourceMappingURL=encryption.component.js.map