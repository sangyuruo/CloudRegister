/**
 * A HTTP interceptor responsibility chain member is a class, which may react on request and response of all requests
 * done by HTTP.
 */
var HttpInterceptor = (function () {
    function HttpInterceptor() {
        this._successor = null;
    }
    Object.defineProperty(HttpInterceptor.prototype, "successor", {
        set: function (successor) {
            this._successor = successor;
        },
        enumerable: true,
        configurable: true
    });
    HttpInterceptor.prototype.processRequestInterception = function (options) {
        return (!this._successor) ? this.requestIntercept(options) :
            this._successor.processRequestInterception(this.requestIntercept(options));
    };
    HttpInterceptor.prototype.processResponseInterception = function (response) {
        return (!this._successor) ? this.responseIntercept(response) :
            this._successor.processResponseInterception(this.responseIntercept(response));
    };
    return HttpInterceptor;
}());
export { HttpInterceptor };
