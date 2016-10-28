import {Injectable} from "@angular/core";
import {AuthService} from "./AuthService";
import {Http, Headers} from "@angular/http";



@Injectable()
export class AuthHttp {

    authService: AuthService;
    http: Http;

    constructor(service: AuthService, httpService: Http) {
        this.authService = service;
        this.http = httpService;
    }

    get(url: string, params?: {headers: Headers}) {
        if (!params) {
            params = { headers: null };
            params.headers = new Headers();
            params.headers.append('Authorization', `Token ${this.authService.authToken}`);
        }
        return this.http.get(url, params).toPromise();
    }

    post(url:string, body: any, params?: {headers: Headers}) {
        if (!params) {
            params = { headers: null };
            params.headers = new Headers();
            params.headers.append('Content-Type', 'application/json');
            params.headers.append('Authorization', `Token ${this.authService.authToken}`);
        }
        return this.http.post(url, body, params).toPromise();
    }

    put(url:string, body: any, params?: {headers: Headers}) {
        if (!params) {
            params = { headers: null };
            params.headers = new Headers();
            params.headers.append('Content-Type', 'application/json');
            params.headers.append('Authorization', `Token ${this.authService.authToken}`);
        }
        return this.http.put(url, body, params).toPromise();
    }

    delete(url:string, params?: {headers: Headers}) {
        if (!params) {
            params = { headers: null };
            params.headers = new Headers();
            params.headers.append('Authorization', `Token ${this.authService.authToken}`);
        }
        return this.http.delete(url, params).toPromise();
    }
}