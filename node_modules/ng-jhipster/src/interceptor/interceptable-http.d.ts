import { HttpInterceptor } from './http.interceptor';
import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
export declare class InterceptableHttp extends Http {
    private firstInterceptor;
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, interceptors: HttpInterceptor[]);
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>;
    get(url: string, options?: RequestOptionsArgs): Observable<Response>;
    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response>;
    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response>;
    delete(url: string, options?: RequestOptionsArgs): Observable<Response>;
    getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs;
    intercept(observable: Observable<Response>): Observable<Response>;
}
