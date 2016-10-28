import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {User} from "./components/models/user";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {

    user: User;

    constructor(private http: Http) {
        let existingToken = localStorage.getItem('token');
        this.authToken = existingToken;
        this.isAuthenticated = existingToken !== undefined && existingToken !== null && existingToken !== '';
    }
    
    isAuthenticated: boolean;
    authToken: string;

    public authenticate(username:string, password:string) {
        // let headers = new Headers();
        // // headers.append('Content-Type', 'application/json');
        console.log('username', username, 'password', password);
        return this.http.post('http://127.0.0.1:8001/login/', {
            username: username,
            password: password
        }).toPromise().then(this.assignToken.bind(this)).catch(this.failAuth.bind(this));
    }

    private assignToken(response: Response) {
        let data = response.json();
        this.authToken = data.token;
        this.user = new User();
        this.user.firstName = data.first_name;
        this.user.lastName = data.last_name;
        this.user.userName = data.user_name;
        this.isAuthenticated = true;
        localStorage.setItem('token', data.token);
        return true
    }

    private failAuth(error: Response) {
        console.log('FAIL!', error);
        this.isAuthenticated = false;
        this.user = null;
        return false;
    }
}