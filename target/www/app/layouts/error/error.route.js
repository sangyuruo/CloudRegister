"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_component_1 = require("./error.component");
exports.errorRoute = [
    {
        path: 'error',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'Error page!'
        },
    },
    {
        path: 'accessdenied',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'Error page!'
        },
    }
];
//# sourceMappingURL=error.route.js.map