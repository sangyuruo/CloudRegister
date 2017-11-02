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
var JHipsterRegistryModule = (function () {
    function JHipsterRegistryModule() {
    }
    return JHipsterRegistryModule;
}());
JHipsterRegistryModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.JHipsterRegistrySharedModule,
            router_1.RouterModule.forRoot(_1.registryState, { useHash: true })
        ],
        declarations: [
            _1.JhiApplicationsComponent,
            _1.JhiConfigComponent,
            _1.JhiEncryptionComponent,
            _1.JhiHistoryComponent,
            _1.JhiReplicasComponent,
            _1.JhiSSHComponent
        ],
        entryComponents: [],
        providers: [
            _1.JhiApplicationsService,
            _1.JhiConfigService,
            _1.JhiEncryptionService,
            _1.JhiHistoryService,
            _1.JhiReplicasService,
            _1.JhiSSHService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], JHipsterRegistryModule);
exports.JHipsterRegistryModule = JHipsterRegistryModule;
//# sourceMappingURL=registry.module.js.map