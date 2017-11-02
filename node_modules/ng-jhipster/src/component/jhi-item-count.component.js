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
import { Component, Input } from '@angular/core';
/**
 * A component that will take care of item count statistics of a pagination.
 */
var JhiItemCountComponent = (function () {
    function JhiItemCountComponent() {
    }
    return JhiItemCountComponent;
}());
export { JhiItemCountComponent };
JhiItemCountComponent.decorators = [
    { type: Component, args: [{
                selector: 'jhi-item-count',
                template: "\n        <div class=\"info jhi-item-count\">\n            Showing {{((page - 1) * itemsPerPage) == 0 ? 1 : ((page - 1) * itemsPerPage + 1)}} -\n            {{(page * itemsPerPage) < total ? (page * itemsPerPage) : total}}\n            of {{total}} items.\n        </div>"
            },] },
];
/** @nocollapse */
JhiItemCountComponent.ctorParameters = function () { return []; };
JhiItemCountComponent.propDecorators = {
    'page': [{ type: Input },],
    'total': [{ type: Input },],
    'itemsPerPage': [{ type: Input },],
};
