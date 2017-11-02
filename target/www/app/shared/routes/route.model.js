"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Route = (function () {
    function Route(path, prefix, appName, status, serviceId, serviceInstances) {
        this.path = path;
        this.prefix = prefix;
        this.appName = appName;
        this.status = status;
        this.serviceId = serviceId;
        this.serviceInstances = serviceInstances;
    }
    return Route;
}());
exports.Route = Route;
//# sourceMappingURL=route.model.js.map