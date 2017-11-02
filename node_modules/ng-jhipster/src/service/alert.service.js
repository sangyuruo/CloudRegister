import { Injectable, Sanitizer, SecurityContext } from '@angular/core';
import { TranslateService } from 'ng2-translate';
var AlertService = (function () {
    function AlertService(sanitizer, toast, translateService) {
        this.sanitizer = sanitizer;
        this.toast = toast;
        this.translateService = translateService;
        this.alertId = 0; // unique id for each alert. Starts from 0.
        this.alerts = [];
        this.timeout = 5000; // default timeout in milliseconds
    }
    AlertService.prototype.clear = function () {
        this.alerts = [];
    };
    AlertService.prototype.get = function () {
        return this.alerts;
    };
    AlertService.prototype.success = function (msg, params, position) {
        return this.addAlert({
            type: 'success',
            msg: msg,
            params: params,
            timeout: this.timeout,
            toast: this.toast,
            position: position
        }, []);
    };
    AlertService.prototype.error = function (msg, params, position) {
        return this.addAlert({
            type: 'danger',
            msg: msg,
            params: params,
            timeout: this.timeout,
            toast: this.toast,
            position: position
        }, []);
    };
    AlertService.prototype.warning = function (msg, params, position) {
        return this.addAlert({
            type: 'warning',
            msg: msg,
            params: params,
            timeout: this.timeout,
            toast: this.toast,
            position: position
        }, []);
    };
    AlertService.prototype.info = function (msg, params, position) {
        return this.addAlert({
            type: 'info',
            msg: msg,
            params: params,
            timeout: this.timeout,
            toast: this.toast,
            position: position
        }, []);
    };
    AlertService.prototype.factory = function (alertOptions) {
        var _this = this;
        var alert = {
            type: alertOptions.type,
            msg: this.sanitizer.sanitize(SecurityContext.HTML, alertOptions.msg),
            id: alertOptions.id,
            timeout: alertOptions.timeout,
            toast: alertOptions.toast,
            position: alertOptions.position ? alertOptions.position : 'top right',
            scoped: alertOptions.scoped,
            close: function (alerts) {
                return _this.closeAlert(alertOptions.id, alerts);
            }
        };
        if (!alert.scoped) {
            this.alerts.push(alert);
        }
        return alert;
    };
    AlertService.prototype.addAlert = function (alertOptions, extAlerts) {
        var _this = this;
        alertOptions.id = this.alertId++;
        if (this.translateService && alertOptions.msg) {
            alertOptions.msg = this.translateService.instant(alertOptions.msg, alertOptions.params);
        }
        var alert = this.factory(alertOptions);
        if (alertOptions.timeout && alertOptions.timeout > 0) {
            setTimeout(function () {
                _this.closeAlert(alertOptions.id, extAlerts);
            }, alertOptions.timeout);
        }
        return alert;
    };
    AlertService.prototype.closeAlert = function (id, extAlerts) {
        var thisAlerts = (extAlerts && extAlerts.length > 0) ? extAlerts : this.alerts;
        return this.closeAlertByIndex(thisAlerts.map(function (e) { return e.id; }).indexOf(id), thisAlerts);
    };
    AlertService.prototype.closeAlertByIndex = function (index, thisAlerts) {
        return thisAlerts.splice(index, 1);
    };
    AlertService.prototype.isToast = function () {
        return this.toast;
    };
    return AlertService;
}());
export { AlertService };
AlertService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AlertService.ctorParameters = function () { return [
    { type: Sanitizer, },
    null,
    { type: TranslateService, },
]; };
