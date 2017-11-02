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
var history_service_1 = require("./history.service");
var refresh_service_1 = require("../../shared/refresh/refresh.service");
var JhiHistoryComponent = (function () {
    function JhiHistoryComponent(historyService, refreshService) {
        this.historyService = historyService;
        this.refreshService = refreshService;
    }
    JhiHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshReloadSubscription = this.refreshService.refreshReload$.subscribe(function (empty) { return _this.refresh(); });
        this.refresh();
    };
    JhiHistoryComponent.prototype.ngOnDestroy = function () {
        this.refreshReloadSubscription.unsubscribe();
    };
    JhiHistoryComponent.prototype.refresh = function () {
        var _this = this;
        this.historyService.findAll().subscribe(function (data) {
            _this.data = data;
            if (_this.activeKey) {
                _this.activate(_this.activeKey);
            }
            else {
                _this.activate('registered');
            }
        });
    };
    JhiHistoryComponent.prototype.activate = function (key) {
        this.activeKey = key;
        this.items = [];
        var obj = this.data ? this.data[key] : null;
        if (obj) {
            for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
                var k = _a[_i];
                this.items.push({ key: k, value: obj[k] });
            }
        }
        this.items = this.sortItems(this.items);
    };
    JhiHistoryComponent.prototype.beforeChange = function ($event) {
        this.activate($event.nextId);
    };
    ;
    JhiHistoryComponent.prototype.sortItems = function (items) {
        this.items = items.sort(function (a, b) {
            if (a.key < b.key) {
                return 1;
            }
            else if (b.key < a.key) {
                return -1;
            }
            else {
                return 0;
            }
        });
        return items;
    };
    return JhiHistoryComponent;
}());
JhiHistoryComponent = __decorate([
    core_1.Component({
        selector: 'jhi-history',
        templateUrl: './history.component.html'
    }),
    __metadata("design:paramtypes", [history_service_1.JhiHistoryService,
        refresh_service_1.JhiRefreshService])
], JhiHistoryComponent);
exports.JhiHistoryComponent = JhiHistoryComponent;
//# sourceMappingURL=history.component.js.map