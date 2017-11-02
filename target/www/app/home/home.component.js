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
var ng_jhipster_1 = require("ng-jhipster");
var shared_1 = require("../shared");
var admin_1 = require("../admin");
var registry_1 = require("../registry");
var app_constants_1 = require("../app.constants");
var eureka_status_service_1 = require("./eureka.status.service");
var HomeComponent = (function () {
    function HomeComponent(principal, loginModalService, eventManager, eurekaStatusService, applicationsService, healthService) {
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.eventManager = eventManager;
        this.eurekaStatusService = eurekaStatusService;
        this.applicationsService = applicationsService;
        this.healthService = healthService;
        this.version = 'v' + app_constants_1.VERSION;
        this.appInstances = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
            if (!account || !_this.isAuthenticated()) {
                _this.login();
            }
            else {
                _this.populateDashboard();
            }
        });
        this.registerAuthenticationSuccess();
    };
    HomeComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
                _this.populateDashboard();
            });
        });
    };
    HomeComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    HomeComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    HomeComponent.prototype.populateDashboard = function () {
        var _this = this;
        this.eurekaStatusService.findAll().subscribe(function (data) {
            _this.status = data.status;
        });
        this.applicationsService.findAll().subscribe(function (data) {
            for (var _i = 0, _a = data.applications; _i < _a.length; _i++) {
                var app = _a[_i];
                for (var _b = 0, _c = app.instances; _b < _c.length; _b++) {
                    var inst = _c[_b];
                    inst.name = app.name;
                    _this.appInstances.push(inst);
                }
            }
        });
        this.healthService.checkHealth().subscribe(function (response) {
            _this.healthData = _this.healthService.transformHealthData(response);
            _this.updatingHealth = false;
        }, function (response) {
            _this.healthData = _this.healthService.transformHealthData(response.data);
            _this.updatingHealth = false;
        });
    };
    HomeComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    HomeComponent.prototype.subSystemName = function (name) {
        this.healthService.getSubSystemName(name);
    };
    HomeComponent.prototype.getBadgeClass = function (statusState) {
        if (statusState === 'UP') {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'jhi-home',
        templateUrl: './home.component.html',
        styleUrls: [
            'home.scss'
        ]
    }),
    __metadata("design:paramtypes", [shared_1.Principal,
        shared_1.LoginModalService,
        ng_jhipster_1.EventManager,
        eureka_status_service_1.EurekaStatusService,
        registry_1.JhiApplicationsService,
        admin_1.JhiHealthService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map