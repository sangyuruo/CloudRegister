var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Pipe } from '@angular/core';
import { FilterPipe } from './filter.pipe';
var PureFilterPipe = (function (_super) {
    __extends(PureFilterPipe, _super);
    function PureFilterPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PureFilterPipe.prototype.transform = function (input, filter, field) {
        return _super.prototype.transform.call(this, input, filter, field);
    };
    return PureFilterPipe;
}(FilterPipe));
export { PureFilterPipe };
PureFilterPipe.decorators = [
    { type: Pipe, args: [{ name: 'pureFilter' },] },
];
/** @nocollapse */
PureFilterPipe.ctorParameters = function () { return []; };
