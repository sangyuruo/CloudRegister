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
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { forwardRef } from '@angular/core';
import { numberOfBytes } from './number-of-bytes';
var MaxbytesValidatorDirective = (function () {
    function MaxbytesValidatorDirective() {
    }
    MaxbytesValidatorDirective.prototype.validate = function (c) {
        return (c.value && numberOfBytes(c.value) <= this.jhiMaxbytes) ? null : {
            maxbytes: {
                valid: false
            }
        };
    };
    return MaxbytesValidatorDirective;
}());
export { MaxbytesValidatorDirective };
MaxbytesValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[jhiMaxbytes][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return MaxbytesValidatorDirective; }), multi: true }
                ]
            },] },
];
/** @nocollapse */
MaxbytesValidatorDirective.ctorParameters = function () { return []; };
MaxbytesValidatorDirective.propDecorators = {
    'jhiMaxbytes': [{ type: Input },],
};
