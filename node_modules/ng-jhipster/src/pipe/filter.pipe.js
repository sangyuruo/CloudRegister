/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Pipe } from '@angular/core';
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.filterByStringAndField = function (filter, field) {
        return function (value) {
            return !filter || (value[field] && value[field].toLowerCase().indexOf(filter.toLowerCase()) !== -1);
        };
    };
    // adapted from https://github.com/VadimDez/ng2-filter-pipe
    FilterPipe.prototype.filterByString = function (filter) {
        return function (value) {
            return !filter || value.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        };
    };
    FilterPipe.prototype.filterDefault = function (filter) {
        return function (value) {
            return !filter || filter === value;
        };
    };
    FilterPipe.prototype.filterByObject = function (filter) {
        var _this = this;
        return function (value) {
            for (var i = 0, keys = Object.keys(filter); i < keys.length; i++) {
                var key = keys[i];
                var type = typeof value[key];
                var isMatching = void 0;
                if (type === 'string') {
                    isMatching = _this.filterByString(filter[key])(value[key]);
                }
                else if (type === 'object') {
                    isMatching = _this.filterByObject(filter[key])(value[key]);
                }
                else {
                    isMatching = _this.filterDefault(filter[key])(value[key]);
                }
                if (!isMatching) {
                    return false;
                }
            }
            return true;
        };
    };
    FilterPipe.prototype.transform = function (input, filter, field) {
        if (!filter) {
            return input;
        }
        var type = typeof filter;
        if (type === 'string') {
            if (field) {
                return input.filter(this.filterByStringAndField(filter, field));
            }
            return input.filter(this.filterByString(filter));
        }
        if (type === 'object') {
            return input.filter(this.filterByObject(filter));
        }
    };
    return FilterPipe;
}());
export { FilterPipe };
FilterPipe.decorators = [
    { type: Pipe, args: [{ name: 'filter', pure: false },] },
];
/** @nocollapse */
FilterPipe.ctorParameters = function () { return []; };
