"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var shared_1 = require("../shared");
var ADMIN_ROUTES = [
    _1.configurationRoute,
    _1.healthRoute,
    _1.logfileRoute,
    _1.logsRoute,
    _1.metricsRoute
];
exports.adminState = [{
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [shared_1.UserRouteAccessService],
        children: ADMIN_ROUTES
    }];
//# sourceMappingURL=admin.route.js.map