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
 * An utility service for data.
 */
var DataUtils = (function () {
    function DataUtils() {
    }
    /**
     * Method to abbreviate the text given
     */
    DataUtils.prototype.abbreviate = function (text, append) {
        if (append === void 0) { append = '...'; }
        if (text.length < 30) {
            return text;
        }
        return text ? (text.substring(0, 15) + append + text.slice(-10)) : '';
    };
    /**
     * Method to find the byte size of the string provides
     */
    DataUtils.prototype.byteSize = function (base64String) {
        return this._formatAsBytes(this._size(base64String));
    };
    DataUtils.prototype._endsWith = function (suffix, str) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };
    DataUtils.prototype._paddingSize = function (value) {
        if (this._endsWith('==', value)) {
            return 2;
        }
        if (this._endsWith('=', value)) {
            return 1;
        }
        return 0;
    };
    DataUtils.prototype._size = function (value) {
        return value.length / 4 * 3 - this._paddingSize(value);
    };
    DataUtils.prototype._formatAsBytes = function (size) {
        return size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' bytes';
    };
    /**
     * Method to open file
     */
    DataUtils.prototype.openFile = function (type, data) {
        window.open('data:' + type + ';base64,' + data, '_blank', 'height=300,width=400');
    };
    /**
     * Method to convert the file to base64
     */
    DataUtils.prototype.toBase64 = function (file, cb) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e) {
            var base64Data = e.target.result.substr(e.target.result.indexOf('base64,') + 'base64,'.length);
            cb(base64Data);
        };
    };
    return DataUtils;
}());
export { DataUtils };
DataUtils.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DataUtils.ctorParameters = function () { return []; };
