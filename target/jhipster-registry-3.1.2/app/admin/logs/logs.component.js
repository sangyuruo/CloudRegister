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
var log_model_1 = require("./log.model");
var logs_service_1 = require("./logs.service");
var shared_1 = require("../../shared");
var LogsComponent = (function () {
    function LogsComponent(logsService, routesService) {
        this.logsService = logsService;
        this.routesService = routesService;
        this.filter = '';
        this.orderProp = 'name';
        this.reverse = false;
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggers = [];
        this.subscription = this.routesService.routeChanged$.subscribe(function (route) {
            _this.activeRoute = route;
            _this.displayActiveRouteLogs();
        });
    };
    LogsComponent.prototype.changeLevel = function (name, level) {
        var _this = this;
        var log = new log_model_1.Log(name, level);
        if (this.activeRoute && this.activeRoute.status !== 'DOWN') {
            this.logsService.changeInstanceLevel(this.activeRoute, log).subscribe(function () {
                _this.logsService.findInstanceAll(_this.activeRoute).subscribe(function (loggers) { return _this.loggers = loggers; });
            });
        }
    };
    LogsComponent.prototype.displayActiveRouteLogs = function () {
        var _this = this;
        this.updatingLogs = true;
        if (this.activeRoute && this.activeRoute.status !== 'DOWN') {
            this.logsService.findInstanceAll(this.activeRoute).subscribe(function (loggers) {
                _this.loggers = loggers;
                _this.updatingLogs = false;
            }, function (error) {
                if (error.status === 503 || error.status === 500 || error.status === 404) {
                    _this.updatingLogs = false;
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
    LogsComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    return LogsComponent;
}());
LogsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-logs',
        templateUrl: './logs.component.html'
    }),
    __metadata("design:paramtypes", [logs_service_1.LogsService,
        shared_1.JhiRoutesService])
], LogsComponent);
exports.LogsComponent = LogsComponent;
//# sourceMappingURL=logs.component.js.map