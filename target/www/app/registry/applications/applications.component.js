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
/* tslint:disable:no-access-missing-member */
// TODO lint disabled as the filter pipe used in template seems to trigger this
var core_1 = require("@angular/core");
var applications_service_1 = require("./applications.service");
var refresh_service_1 = require("../../shared/refresh/refresh.service");
var JhiApplicationsComponent = (function () {
    function JhiApplicationsComponent(applicationsService, refreshService) {
        this.applicationsService = applicationsService;
        this.refreshService = refreshService;
    }
    JhiApplicationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshReloadSubscription = this.refreshService.refreshReload$.subscribe(function (empty) { return _this.refresh(); });
        this.refresh();
    };
    JhiApplicationsComponent.prototype.ngOnDestroy = function () {
        this.refreshReloadSubscription.unsubscribe();
        this.applicationsServiceSubscription.unsubscribe();
    };
    JhiApplicationsComponent.prototype.refresh = function () {
        var _this = this;
        this.applicationsServiceSubscription = this.applicationsService.findAll().subscribe(function (data) {
            _this.data = data;
            if (_this.application) {
                _this.show(_this.application);
            }
            else if (data.applications.length > 0) {
                _this.show(data.applications[0].name);
            }
        });
    };
    JhiApplicationsComponent.prototype.show = function (app) {
        this.application = app;
        var found = false;
        for (var _i = 0, _a = this.data.applications; _i < _a.length; _i++) {
            var dataApp = _a[_i];
            dataApp.active = '';
            if (dataApp.name === this.application) {
                this.instances = dataApp.instances;
                dataApp.active = 'active';
                found = true;
            }
        }
        if (!found) {
            this.application = false;
        }
    };
    JhiApplicationsComponent.prototype.getBadgeClass = function (statusState) {
        if (statusState && statusState === 'UP') {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    };
    return JhiApplicationsComponent;
}());
JhiApplicationsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-applications',
        templateUrl: './applications.component.html',
        styleUrls: [
            'applications.component.scss'
        ]
    }),
    __metadata("design:paramtypes", [applications_service_1.JhiApplicationsService,
        refresh_service_1.JhiRefreshService])
], JhiApplicationsComponent);
exports.JhiApplicationsComponent = JhiApplicationsComponent;
//# sourceMappingURL=applications.component.js.map