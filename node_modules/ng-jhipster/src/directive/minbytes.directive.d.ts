import { FormControl } from '@angular/forms';
export declare class MinbytesValidatorDirective {
    jhiMinbytes: number;
    constructor();
    validate(c: FormControl): {
        minbytes: {
            valid: boolean;
        };
    };
}
