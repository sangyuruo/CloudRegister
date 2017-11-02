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
import { Injectable } from '@angular/core';
/**
 * An utility service for pagination
 */
var PaginationUtil = (function () {
    function PaginationUtil() {
    }
    /**
     * Method to find whether the sort is defined
     */
    PaginationUtil.prototype.parseAscending = function (sort) {
        var sortArray = sort.split(',');
        sortArray = sortArray.length > 1 ? sortArray : sort.split('%2C');
        if (sortArray.length > 1) {
            return sortArray.slice(-1)[0] === 'asc';
        }
        // default to true if no sort is defined
        return true;
    };
    /**
     * Method to query params are strings, and need to be parsed
     */
    PaginationUtil.prototype.parsePage = function (page) {
        return parseInt(page, 10);
    };
    /**
     * Method to sort can be in the format `id,asc` or `id`
     */
    PaginationUtil.prototype.parsePredicate = function (sort) {
        return sort.split(',')[0].split('%2C')[0];
    };
    return PaginationUtil;
}());
export { PaginationUtil };
PaginationUtil.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PaginationUtil.ctorParameters = function () { return []; };
