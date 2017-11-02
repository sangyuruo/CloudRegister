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
var replicas_service_1 = require("./replicas.service");
var refresh_service_1 = require("../../shared/refresh/refresh.service");
var JhiReplicasComponent = (function () {
    function JhiReplicasComponent(replicasService, refreshService) {
        this.replicasService = replicasService;
        this.refreshService = refreshService;
        this.showMore = true;
    }
    JhiReplicasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshReloadSubscription = this.refreshService.refreshReload$.subscribe(function (empty) { return _this.refresh(); });
        this.refresh();
    };
    JhiReplicasComponent.prototype.ngOnDestroy = function () {
        this.refreshReloadSubscription.unsubscribe();
    };
    JhiReplicasComponent.prototype.refresh = function () {
        var _this = this;
        this.replicasService.findAll().subscribe(function (replicas) {
            _this.replicas = replicas;
        });
    };
    return JhiReplicasComponent;
}());
JhiReplicasComponent = __decorate([
    core_1.Component({
        selector: 'jhi-replicas',
        templateUrl: './replicas.component.html',
        styleUrls: [
            'replicas.component.scss'
        ]
    }),
    __metadata("design:paramtypes", [replicas_service_1.JhiReplicasService,
        refresh_service_1.JhiRefreshService])
], JhiReplicasComponent);
exports.JhiReplicasComponent = JhiReplicasComponent;
//# sourceMappingURL=replicas.component.js.map