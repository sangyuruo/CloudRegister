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
import { TranslateService } from 'ng2-translate';
import { ConfigService } from '../config.service';
var JhiLanguageService = (function () {
    function JhiLanguageService(translateService, configService) {
        this.translateService = translateService;
        this.configService = configService;
        this.defaultLocation = 'global';
        this.currentLang = 'en';
        this.locations = [];
        this.init();
    }
    JhiLanguageService.prototype.init = function () {
        var config = this.configService.getConfig();
        this.defaultLocation = config.defaultI18nLocation;
        this.currentLang = config.defaultI18nLang;
        this.translateService.setDefaultLang(this.currentLang);
        this.translateService.currentLang = this.currentLang;
    };
    JhiLanguageService.prototype.changeLanguage = function (languageKey) {
        this.currentLang = languageKey;
        this.configService.CONFIG_OPTIONS.defaultI18nLang = languageKey;
        this.reload();
    };
    JhiLanguageService.prototype.setLocations = function (locations) {
        this.locations = locations;
        this.locations.push(this.defaultLocation);
        this.reload();
    };
    JhiLanguageService.prototype.addLocation = function (location) {
        if (this.locations.indexOf(location) === -1) {
            this.locations.push(location);
            this.reload();
        }
    };
    JhiLanguageService.prototype.reload = function () {
        this.translateService.setDefaultLang(this.currentLang);
        var translatePartialLoader = this.translateService.currentLoader;
        translatePartialLoader.setLocations(this.locations);
        // reset the language cache //FIXME not ideal as this increases the http requests
        this.translateService.resetLang(this.currentLang);
        this.translateService.use(this.currentLang);
    };
    JhiLanguageService.prototype.getCurrent = function () {
        return Promise.resolve(this.currentLang);
    };
    return JhiLanguageService;
}());
export { JhiLanguageService };
JhiLanguageService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
JhiLanguageService.ctorParameters = function () { return [
    { type: TranslateService, },
    { type: ConfigService, },
]; };
