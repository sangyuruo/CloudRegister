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
var routes_service_1 = require("./routes.service");
var refresh_service_1 = require("../refresh/refresh.service");
var JhiRouteSelectorComponent = (function () {
    function JhiRouteSelectorComponent(routesService, refreshService) {
        this.routesService = routesService;
        this.refreshService = refreshService;
        this.searchedInstance = '';
    }
    JhiRouteSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute = this.routesService.getSelectedInstance();
        this.updateRoute();
        this.refreshReloadSubscription = this.refreshService.refreshReload$.subscribe(function (reload) { return _this.updateRoute(); });
        this.routeReloadSubscription = this.routesService.routeReload$.subscribe(function (reload) { return _this.updateRoute(); });
        this.routeDownSubscription = this.routesService.routeDown$.subscribe(function (route) {
            _this.downRoute(route);
            _this.setActiveRoute(null);
        });
    };
    JhiRouteSelectorComponent.prototype.ngOnDestroy = function () {
        /** prevent memory leak when component destroyed **/
        this.routeReloadSubscription.unsubscribe();
        this.routeDownSubscription.unsubscribe();
        this.refreshReloadSubscription.unsubscribe();
    };
    /** Change active route only if exists, else choose Registry **/
    JhiRouteSelectorComponent.prototype.setActiveRoute = function (instance) {
        if (instance && this.routes && this.routes.findIndex(function (r) { return r.appName === instance.appName; }) !== -1) {
            this.activeRoute = instance;
        }
        else if (this.routes && this.routes.length > 0) {
            this.activeRoute = this.routes[0];
        }
        this.routesService.storeSelectedInstance(this.activeRoute);
        this.routesService.routeChange(this.activeRoute);
    };
    JhiRouteSelectorComponent.prototype.updateRoute = function () {
        var _this = this;
        this.updatingRoutes = true;
        this.routesService.findAll().subscribe(function (routes) {
            _this.savedRoutes = routes;
            _this.routes = routes;
            _this.searchedInstance = '';
            if (_this.activeRoute) {
                _this.setActiveRoute(_this.activeRoute);
            }
            else if (routes.length > 0) {
                _this.setActiveRoute(routes[0]);
            }
            _this.updatingRoutes = false;
        }, function (error) {
            if (error.status === 503 || error.status === 500 || error.status === 404) {
                if (error.status === 500 || error.status === 404) {
                    _this.downRoute(_this.activeRoute);
                    _this.setActiveRoute(null);
                }
                _this.updatingRoutes = false;
            }
        });
    };
    JhiRouteSelectorComponent.prototype.downRoute = function (instance) {
        if (instance) {
            instance.status = 'DOWN';
        }
    };
    /* ==========================================================================
                                        UI PART
     ========================================================================== */
    JhiRouteSelectorComponent.prototype.getActiveRoute = function () {
        return this.activeRoute.serviceId ? this.activeRoute.serviceId.toUpperCase() : this.activeRoute.appName.toUpperCase();
    };
    JhiRouteSelectorComponent.prototype.getBadgeClassRoute = function (route) {
        if (route && !route.status) {
            route.status = 'UP';
        }
        return this.getBadgeClass(route.status);
    };
    JhiRouteSelectorComponent.prototype.getBadgeClass = function (statusState) {
        if (statusState && (statusState === 'UP' || statusState.toLowerCase() === 'starting')) {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    };
    JhiRouteSelectorComponent.prototype.state = function (route) {
        if (route && route.status && route.status === 'DOWN') {
            return 'disabled';
        }
        else if (route && route.serviceId === this.activeRoute.serviceId) {
            return 'active';
        }
    };
    JhiRouteSelectorComponent.prototype.searchByAppName = function () {
        var _this = this;
        if (this.searchedInstance === '') {
            this.routes = this.savedRoutes;
        }
        else {
            this.routes = this.savedRoutes.filter(function (route) {
                return route.appName.includes(_this.searchedInstance);
            });
        }
    };
    /**
     * Close the dropdown element.
     * The dropdown can be closed directly in the HTML, but cause the warning
     * ("The method "drop" that you're trying to access does not exist in the class declaration.").
     * @param dropdown
     */
    JhiRouteSelectorComponent.prototype.closeDropDown = function (dropdown) {
        if (dropdown) {
            dropdown.close();
        }
    };
    return JhiRouteSelectorComponent;
}());
JhiRouteSelectorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-route-selector',
        templateUrl: './route-selector.component.html',
        styleUrls: [
            'route-selector.component.scss'
        ]
    }),
    __metadata("design:paramtypes", [routes_service_1.JhiRoutesService,
        refresh_service_1.JhiRefreshService])
], JhiRouteSelectorComponent);
exports.JhiRouteSelectorComponent = JhiRouteSelectorComponent;
//# sourceMappingURL=route-selector.component.js.map