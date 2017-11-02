import { Directive, ElementRef } from '@angular/core';
export var ShowValidationDirective = (function () {
    function ShowValidationDirective(el) {
        this.el = el;
    }
    ShowValidationDirective.prototype.ngAfterViewInit = function () {
        var formElements = this.el.nativeElement.querySelectorAll('.form-group');
        formElements.forEach(function (formGroup) {
            var inputs = formGroup.querySelectorAll('input,textarea,select');
            if (inputs) {
                inputs.forEach(function (input) {
                    if (input.hasAttribute('[(ngModel)]')) {
                        var isInvalid = input.classList.contains('ng-invalid') && input.classList.contains('ng-dirty');
                        formGroup.classList.toggle('has-error', isInvalid);
                    }
                });
            }
        });
    };
    ShowValidationDirective.decorators = [
        { type: Directive, args: [{ selector: 'form[jhiShowValidation]' },] },
    ];
    /** @nocollapse */
    ShowValidationDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return ShowValidationDirective;
}());
