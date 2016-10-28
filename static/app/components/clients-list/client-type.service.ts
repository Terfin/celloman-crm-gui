import {Injectable} from '@angular/core';
import {ClientType} from '../models/client-type';
import 'rxjs/add/operator/toPromise';
import {AuthHttp} from "../../authhttp.service";


@Injectable()
export class ClientTypeService {
    constructor(private http:AuthHttp) {
        this.http = http;
    }
    getClientTypes() {
        return this.http.get(`http://127.0.0.1:8001/customer_types`)
            .then(
                response => response.json() as ClientType[]
            )
            .catch(this.handleError);
    }

    getClientType(id:number) {
        return this.http.get(`http://127.0.0.1:8001/customer_types/${id}`)
            .then(
                response => response.json() as ClientType
            )
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}