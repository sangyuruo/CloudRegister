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
var configuration_service_1 = require("./configuration.service");
var shared_1 = require("../../shared");
var JhiConfigurationComponent = (function () {
    function JhiConfigurationComponent(configurationService, routesService) {
        this.configurationService = configurationService;
        this.routesService = routesService;
        this.allConfiguration = null;
        this.configuration = null;
        this.configKeys = [];
        this.filter = '';
        this.orderProp = 'prefix';
        this.reverse = false;
    }
    JhiConfigurationComponent.prototype.keys = function (dict) {
        return (dict === undefined) ? [] : Object.keys(dict);
    };
    JhiConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.routesService.routeChanged$.subscribe(function (route) {
            _this.activeRoute = route;
            _this.displayActiveRouteConfig();
        });
    };
    JhiConfigurationComponent.prototype.displayActiveRouteConfig = function () {
        var _this = this;
        this.updatingConfig = true;
        if (this.activeRoute && this.activeRoute.status !== 'DOWN') {
            this.configurationService.getInstanceConfigs(this.activeRoute).subscribe(function (configuration) {
                _this.configuration = configuration;
                _this.updatingConfig = false;
                for (var _i = 0, configuration_1 = configuration; _i < configuration_1.length; _i++) {
                    var config = configuration_1[_i];
                    if (config.properties !== undefined) {
                        _this.configKeys.push(Object.keys(config.properties));
                    }
                }
            }, function (error) {
                _this.updatingConfig = false;
                _this.routesService.routeDown(_this.activeRoute);
            });
            this.configurationService.getInstanceEnv(this.activeRoute).subscribe(function (configuration) {
                _this.allConfiguration = configuration;
            });
        }
        else {
            this.routesService.routeDown(this.activeRoute);
        }
    };
    JhiConfigurationComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    return JhiConfigurationComponent;
}());
JhiConfigurationComponent = __decorate([
    core_1.Component({
        selector: 'jhi-configuration',
        templateUrl: './configuration.component.html'
    }),
    __metadata("design:paramtypes", [configuration_service_1.JhiConfigurationService,
        shared_1.JhiRoutesService])
], JhiConfigurationComponent);
exports.JhiConfigurationComponent = JhiConfigurationComponent;
//# sourceMappingURL=configuration.component.js.map