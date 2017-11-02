"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng_jhipster_1 = require("ng-jhipster");
var group_by_pipe_1 = require("./pipe/group-by.pipe");
var _1 = require("./");
function alertServiceProvider(sanitizer) {
    // set below to true to make alerts look like toast
    var isToast = false;
    return new ng_jhipster_1.AlertService(sanitizer, isToast);
}
exports.alertServiceProvider = alertServiceProvider;
var JHipsterRegistrySharedCommonModule = (function () {
    function JHipsterRegistrySharedCommonModule() {
    }
    return JHipsterRegistrySharedCommonModule;
}());
JHipsterRegistrySharedCommonModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.JHipsterRegistrySharedLibsModule
        ],
        declarations: [
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent,
            _1.JhiRouteSelectorComponent,
            _1.JhiRefreshSelectorComponent,
            group_by_pipe_1.GroupByPipe
        ],
        providers: [
            {
                provide: ng_jhipster_1.AlertService,
                useFactory: alertServiceProvider,
                deps: [core_1.Sanitizer]
            },
            platform_browser_1.Title
        ],
        exports: [
            _1.JHipsterRegistrySharedLibsModule,
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent,
            _1.JhiRouteSelectorComponent,
            _1.JhiRefreshSelectorComponent,
            group_by_pipe_1.GroupByPipe
        ]
    })
], JHipsterRegistrySharedCommonModule);
exports.JHipsterRegistrySharedCommonModule = JHipsterRegistrySharedCommonModule;
//# sourceMappingURL=shared-common.module.js.map