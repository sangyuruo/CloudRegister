import { FormControl } from '@angular/forms';
export declare class MaxbytesValidatorDirective {
    jhiMaxbytes: number;
    constructor();
    validate(c: FormControl): {
        maxbytes: {
            valid: boolean;
        };
    };
}
