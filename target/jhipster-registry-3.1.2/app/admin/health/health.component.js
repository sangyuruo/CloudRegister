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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var health_service_1 = require("./health.service");
var health_modal_component_1 = require("./health-modal.component");
var shared_1 = require("../../shared");
var JhiHealthCheckComponent = (function () {
    function JhiHealthCheckComponent(modalService, healthService, routesService) {
        this.modalService = modalService;
        this.healthService = healthService;
        this.routesService = routesService;
    }
    JhiHealthCheckComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.routesService.routeChanged$.subscribe(function (route) {
            _this.activeRoute = route;
            _this.displayActiveRouteHealth();
        });
    };
    JhiHealthCheckComponent.prototype.displayActiveRouteHealth = function () {
        var _this = this;
        this.updatingHealth = true;
        if (this.activeRoute && this.activeRoute.status !== 'DOWN') {
            this.healthService.checkInstanceHealth(this.activeRoute).subscribe(function (health) {
                _this.healthData = _this.healthService.transformHealthData(health);
                _this.updatingHealth = false;
            }, function (error) {
                if (error.status === 503 || error.status === 500 || error.status === 404) {
                    _this.healthData = _this.healthService.transformHealthData(error.json());
                    _this.updatingHealth = false;
                    if (error.status === 500 || error.status === 404) {
                        _this.routesService.routeDown(_this.activeRoute);
                    }
                }
            });
        }
        else {
            this.routesService.routeDown(this.activeRoute);
        }
    };
    // user click
    JhiHealthCheckComponent.prototype.showHealth = function (health) {
        var modalRef = this.modalService.open(health_modal_component_1.JhiHealthModalComponent);
        modalRef.componentInstance.currentHealth = health;
        modalRef.result.then(function (result) {
            // Left blank intentionally, nothing to do here
        }, function (reason) {
            // Left blank intentionally, nothing to do here
        });
    };
    JhiHealthCheckComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    // user click
    JhiHealthCheckComponent.prototype.getBadgeClass = function (statusState) {
        if (!statusState || statusState !== 'UP') {
            return 'badge-danger';
        }
        else {
            return 'badge-success';
        }
    };
    JhiHealthCheckComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    JhiHealthCheckComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    return JhiHealthCheckComponent;
}());
JhiHealthCheckComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health',
        templateUrl: './health.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        health_service_1.JhiHealthService,
        shared_1.JhiRoutesService])
], JhiHealthCheckComponent);
exports.JhiHealthCheckComponent = JhiHealthCheckComponent;
//# sourceMappingURL=health.component.js.map