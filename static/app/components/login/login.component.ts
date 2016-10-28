import {Component} from "@angular/core";
import {AuthService} from "../../AuthService";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'login',
    styleUrls: ['login.component.css'],
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    username: string;
    password: string;
    error: string;

    constructor(private authService: AuthService, private router: Router) {
    }

    login() {
        this.authService.authenticate(this.username, this.password).then(success => {
            if (success) {
                this.error = '';
                this.router.navigate(['/dashboard']);
            }
            else {
               this.error = 'Login failed. Please check your credentials or try again later';
            }
        });
    }
}