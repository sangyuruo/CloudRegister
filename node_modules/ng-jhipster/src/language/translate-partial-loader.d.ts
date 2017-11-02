import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TranslateLoader } from 'ng2-translate';
export declare class TranslatePartialLoader implements TranslateLoader {
    private http;
    private prefix;
    private suffix;
    private locations;
    constructor(http: Http, prefix?: string, suffix?: string);
    setLocations(locations: string[]): void;
    getTranslation(lang: string): Observable<any>;
    private getPartFile(part, combinedObject, lang);
}
