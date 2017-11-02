import { Observable } from 'rxjs/Observable';
var TranslatePartialLoader = (function () {
    function TranslatePartialLoader(http, prefix, suffix) {
        if (prefix === void 0) { prefix = 'i18n'; }
        if (suffix === void 0) { suffix = '.json'; }
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
        this.locations = [];
    }
    TranslatePartialLoader.prototype.setLocations = function (locations) {
        this.locations = locations;
    };
    TranslatePartialLoader.prototype.getTranslation = function (lang) {
        var _this = this;
        var combinedObject = new Object();
        var oldObsevers;
        var newObserver;
        this.locations.forEach(function (value) {
            newObserver = _this.getPartFile(value, combinedObject, lang);
            if (oldObsevers == null) {
                oldObsevers = newObserver;
            }
            else {
                oldObsevers = oldObsevers.merge(newObserver);
            }
        });
        return oldObsevers;
    };
    TranslatePartialLoader.prototype.getPartFile = function (part, combinedObject, lang) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.get(_this.prefix + "/" + lang + "/" + part + _this.suffix).subscribe(function (res) {
                var responseObj = res.json();
                Object.keys(responseObj).forEach(function (key) {
                    if (!combinedObject[key]) {
                        combinedObject[key] = responseObj[key];
                    }
                    else {
                        Object.assign(combinedObject[key], responseObj[key]);
                    }
                });
                observer.next(combinedObject);
                // Call complete to close this stream (like a promise)
                observer.complete();
            });
        });
    };
    return TranslatePartialLoader;
}());
export { TranslatePartialLoader };
