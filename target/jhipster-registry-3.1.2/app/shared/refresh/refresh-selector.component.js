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
var Observable_1 = require("rxjs/Observable");
var refresh_service_1 = require("./refresh.service");
var JhiRefreshSelectorComponent = (function () {
    function JhiRefreshSelectorComponent(refreshService) {
        this.refreshService = refreshService;
        this.refreshTimes = [0, 5, 10, 30, 60, 300];
        this.activeRefreshTime = this.refreshTimes[0];
    }
    JhiRefreshSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRefreshTime = this.refreshService.getSelectedRefreshTime();
        this.refreshChangedSubscription = this.refreshService.refreshChanged$.subscribe(function (empty) { return _this.launchTimer(true); });
        this.launchTimer(false);
    };
    JhiRefreshSelectorComponent.prototype.ngOnDestroy = function () {
        /** prevent memory leak when component destroyed **/
        this.refreshChangedSubscription.unsubscribe();
        if (this.refreshTimer) {
            this.refreshTimer.unsubscribe();
        }
    };
    JhiRefreshSelectorComponent.prototype.manualRefresh = function () {
        this.refreshService.refreshReload();
    };
    /** Change active time only if exists, else 0 **/
    JhiRefreshSelectorComponent.prototype.setActiveRefreshTime = function (time) {
        if (time && this.refreshTimes.findIndex(function (t) { return t === time; }) !== -1) {
            this.activeRefreshTime = time;
        }
        else {
            this.activeRefreshTime = this.refreshTimes[0];
        }
        this.refreshService.storeSelectedRefreshTime(time);
        this.refreshService.refreshChanged();
    };
    /** Init the timer **/
    JhiRefreshSelectorComponent.prototype.subscribe = function () {
        var _this = this;
        if (this.activeRefreshTime && this.activeRefreshTime > 0) {
            this.refreshTimer = Observable_1.Observable.interval(this.activeRefreshTime * 1000).subscribe(function () {
                _this.refreshService.refreshReload();
            });
        }
    };
    /** Launch (or relaunch if true) the timer. **/
    JhiRefreshSelectorComponent.prototype.launchTimer = function (relaunch) {
        if (relaunch && this.refreshTimer) {
            this.refreshTimer.unsubscribe();
        }
        this.subscribe();
    };
    /* ==========================================================================
                                        UI PART
     ========================================================================== */
    JhiRefreshSelectorComponent.prototype.classTime = function () {
        if (this.activeRefreshTime <= 0) {
            return 'fa fa-pause';
        }
        return 'fa fa-repeat';
    };
    JhiRefreshSelectorComponent.prototype.stateTime = function (time) {
        if (time === this.activeRefreshTime) {
            return 'active';
        }
    };
    JhiRefreshSelectorComponent.prototype.getActiveRefreshTime = function () {
        if (this.activeRefreshTime <= 0) {
            return 'disabled';
        }
        return this.activeRefreshTime + ' sec.';
    };
    return JhiRefreshSelectorComponent;
}());
JhiRefreshSelectorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-refresh-selector',
        templateUrl: './refresh-selector.component.html',
        styleUrls: [
            'refresh-selector.component.scss'
        ]
    }),
    __metadata("design:paramtypes", [refresh_service_1.JhiRefreshService])
], JhiRefreshSelectorComponent);
exports.JhiRefreshSelectorComponent = JhiRefreshSelectorComponent;
//# sourceMappingURL=refresh-selector.component.js.map