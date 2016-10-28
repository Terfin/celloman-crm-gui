import {Injectable} from '@angular/core';
import {Client} from '../models/client';
import 'rxjs/add/operator/toPromise';
import {AuthHttp} from "../../authhttp.service";


@Injectable()
export class ClientService {
    constructor(private http:AuthHttp) {
        this.http = http;
    }
    getClients() {
        return this.http.get(`http://127.0.0.1:8001/customers`)
            .then(
                response => response.json() as Client[]
            )
            .catch(this.handleError);
    }

    getClient(id:number) {
        return this.http.get(`http://127.0.0.1:8001/customers/${id}`)
            .then(
                response => response.json() as Client
            )
            .catch(this.handleError);
    }
    
    createClient(client:Client) : Promise<Client> {
        return this.http.post('http://127.0.0.1:8001/customers/', client)
            .then(
                response => response.json() as Client
            )
            .catch(this.handleError);
    }
    
    deleteClient(client:Client) {
        return this.http.delete(`http://127.0.0.1:8001/customers/${client.id}`)
            .catch(this.handleError);
    }
    
    updateClient(client:Client) {
        return this.http.put(`http://127.0.0.1:8001/customers/${client.id}/`, client)
            .then(
                response => response.json() as Client
            )
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}