"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var shared_1 = require("../shared");
var REGISTRY_ROUTES = [
    _1.applicationsRoute,
    _1.configRoute,
    _1.encryptionRoute,
    _1.historyRoute,
    _1.replicasRoute,
    _1.sshRoute
];
exports.registryState = [{
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [shared_1.UserRouteAccessService],
        children: REGISTRY_ROUTES
    }];
//# sourceMappingURL=registry.route.js.map