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
var http_1 = require("@angular/http");
var Subject_1 = require("rxjs/Subject");
var ng2_webstorage_1 = require("ng2-webstorage");
var JhiRefreshService = (function () {
    function JhiRefreshService(http, sessionStorage) {
        this.http = http;
        this.sessionStorage = sessionStorage;
        // Observable sources
        this.refreshChangedSource = new Subject_1.Subject();
        this.refreshReloadSource = new Subject_1.Subject();
        this.refreshChanged$ = this.refreshChangedSource.asObservable();
        this.refreshReload$ = this.refreshReloadSource.asObservable();
    }
    JhiRefreshService.prototype.refreshChanged = function () {
        this.refreshChangedSource.next();
    };
    JhiRefreshService.prototype.refreshReload = function () {
        this.refreshReloadSource.next();
    };
    JhiRefreshService.prototype.getSelectedRefreshTime = function () {
        return this.sessionStorage.retrieve('refreshTime');
    };
    JhiRefreshService.prototype.storeSelectedRefreshTime = function (time) {
        this.sessionStorage.store('refreshTime', time);
    };
    return JhiRefreshService;
}());
JhiRefreshService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        ng2_webstorage_1.SessionStorageService])
], JhiRefreshService);
exports.JhiRefreshService = JhiRefreshService;
//# sourceMappingURL=refresh.service.js.map