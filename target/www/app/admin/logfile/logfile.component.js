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
var logfile_service_1 = require("./logfile.service");
var shared_1 = require("../../shared");
var JhiLogfileComponent = (function () {
    function JhiLogfileComponent(jhiLogfileService, routesService) {
        this.jhiLogfileService = jhiLogfileService;
        this.routesService = routesService;
    }
    JhiLogfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.routesService.routeChanged$.subscribe(function (route) {
            _this.activeRoute = route;
            _this.displayActiveRouteLog();
        });
    };
    JhiLogfileComponent.prototype.displayActiveRouteLog = function () {
        var _this = this;
        this.updatingLogfile = true;
        if (this.activeRoute && this.activeRoute.status !== 'DOWN') {
            this.jhiLogfileService.getInstanceLogfile(this.activeRoute).subscribe(function (logtxt) {
                _this.logtxt = logtxt;
                _this.updatingLogfile = false;
            }, function (error) {
                if (error.status === 503 || error.status === 500 || error.status === 404) {
                    _this.logtxt = 'No available logfile. \n'
                        + 'Please check:\n '
                        + '- if the microservice is up\n '
                        + '- these properties are set: \n '
                        + '    - logging.path\n '
                        + '    - logging.file (to avoid using the same spring.log)\n\n'
                        + 'See:\n '
                        + '- https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-endpoints.html\n '
                        + '- https://docs.spring.io/spring-boot/docs/current/reference/html/howto-logging.html';
                    _this.updatingLogfile = false;
                }
            });
        }
    };
    JhiLogfileComponent.prototype.scrollToBottom = function () {
        this.logFileViewer.nativeElement.scrollTop = this.logFileViewer.nativeElement.scrollHeight;
    };
    JhiLogfileComponent.prototype.scrollToTop = function () {
        this.logFileViewer.nativeElement.scrollTop = this.logFileViewer.nativeElement.scrolledUp;
    };
    JhiLogfileComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    return JhiLogfileComponent;
}());
__decorate([
    core_1.ViewChild('logfile'),
    __metadata("design:type", core_1.ElementRef)
], JhiLogfileComponent.prototype, "logFileViewer", void 0);
JhiLogfileComponent = __decorate([
    core_1.Component({
        selector: 'jhi-logfile',
        templateUrl: './logfile.component.html',
        styleUrls: [
            'logfile.scss'
        ]
    }),
    __metadata("design:paramtypes", [logfile_service_1.JhiLogfileService,
        shared_1.JhiRoutesService])
], JhiLogfileComponent);
exports.JhiLogfileComponent = JhiLogfileComponent;
//# sourceMappingURL=logfile.component.js.map