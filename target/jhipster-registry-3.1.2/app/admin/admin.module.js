"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("../shared");
var _1 = require("./");
var JHipsterRegistryAdminModule = (function () {
    function JHipsterRegistryAdminModule() {
    }
    return JHipsterRegistryAdminModule;
}());
JHipsterRegistryAdminModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.JHipsterRegistrySharedModule,
            router_1.RouterModule.forRoot(_1.adminState, { useHash: true })
        ],
        declarations: [
            _1.LogsComponent,
            _1.JhiConfigurationComponent,
            _1.JhiHealthCheckComponent,
            _1.JhiHealthModalComponent,
            _1.JhiMetricsMonitoringComponent,
            _1.JhiMetricsMonitoringModalComponent,
            _1.JhiLogfileComponent
        ],
        entryComponents: [
            _1.JhiHealthModalComponent,
            _1.JhiMetricsMonitoringModalComponent,
        ],
        providers: [
            _1.JhiConfigurationService,
            _1.JhiHealthService,
            _1.JhiMetricsService,
            _1.LogsService,
            _1.JhiLogfileService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], JHipsterRegistryAdminModule);
exports.JHipsterRegistryAdminModule = JHipsterRegistryAdminModule;
//# sourceMappingURL=admin.module.js.map