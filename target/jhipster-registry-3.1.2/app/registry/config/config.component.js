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
var config_service_1 = require("./config.service");
var profile_service_1 = require("../../layouts/profiles/profile.service");
var _1 = require("../");
var refresh_service_1 = require("../../shared/refresh/refresh.service");
var JhiConfigComponent = (function () {
    function JhiConfigComponent(configService, profileService, applicationsService, refreshService) {
        this.configService = configService;
        this.profileService = profileService;
        this.applicationsService = applicationsService;
        this.refreshService = refreshService;
        this.application = 'application';
        this.profile = 'prod';
        this.label = 'master';
        this.activeRegistryProfiles = [];
        this.isNative = true;
        this.applicationList = ['application'];
    }
    JhiConfigComponent.prototype.ngOnInit = function () {
        this.load();
        this.refresh();
    };
    JhiConfigComponent.prototype.ngOnDestroy = function () {
        this.refreshReloadSubscription.unsubscribe();
    };
    JhiConfigComponent.prototype.load = function () {
        var _this = this;
        this.profileService.getProfileInfo().subscribe(function (response) {
            _this.activeRegistryProfiles = response.activeProfiles;
            _this.isNative = _this.activeRegistryProfiles.includes('native');
            _this.nativeSearchLocation = response.nativeSearchLocation;
            _this.gitUri = response.gitUri;
            _this.gitSearchLocation = response.gitSearchLocation;
        });
        this.refreshReloadSubscription = this.refreshService.refreshReload$.subscribe(function (empty) { return _this.refresh(); });
    };
    JhiConfigComponent.prototype.refresh = function () {
        var _this = this;
        this.configService.getConfigAsYaml(this.application, this.profile, this.label).subscribe(function (response) {
            _this.configAsYaml = response;
        }, function () {
            _this.configAsYaml = '';
        });
        this.configService.getConfigAsProperties(this.application, this.profile, this.label).subscribe(function (response) {
            console.log(response);
            _this.configAsProperties = response;
            var keyValueArray = [];
            _this.configAsProperties.split('\n').forEach(function (property) {
                var keyValueSplit = property.split(': ');
                keyValueArray.push({ key: keyValueSplit[0], value: keyValueSplit[1] });
            });
            _this.configAsKeyValuePairs = keyValueArray;
        }, function () {
            _this.configAsProperties = '';
        });
        this.configService.getConfigAsJson(this.application, this.profile, this.label).subscribe(function (response) {
            _this.configAsJson = response;
        }, function () {
            _this.configAsJson = {};
        });
        this.applicationsService.findAll().subscribe(function (data) {
            if (data && data.applications) {
                _this.applicationList = ['application'];
                data.applications.forEach(function (application) {
                    var instanceId = application.instances[0].instanceId;
                    var applicationName;
                    if (instanceId.indexOf(':') === -1) {
                        applicationName = application.name.toLowerCase();
                    }
                    else {
                        applicationName = instanceId.substr(0, instanceId.indexOf(':'));
                    }
                    _this.applicationList.push(applicationName);
                });
            }
        });
    };
    return JhiConfigComponent;
}());
JhiConfigComponent = __decorate([
    core_1.Component({
        selector: 'jhi-config',
        templateUrl: './config.component.html'
    }),
    __metadata("design:paramtypes", [config_service_1.JhiConfigService,
        profile_service_1.ProfileService,
        _1.JhiApplicationsService,
        refresh_service_1.JhiRefreshService])
], JhiConfigComponent);
exports.JhiConfigComponent = JhiConfigComponent;
//# sourceMappingURL=config.component.js.map