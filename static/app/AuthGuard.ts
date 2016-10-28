import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {AuthService} from "./AuthService";

@Injectable()
export class AuthGuard implements CanActivate {

    service: AuthService;

    constructor(protected router: Router, protected authService: AuthService) {
        this.router = router;
        this.service = authService;
    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
        if (!this.service.isAuthenticated) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

}


@Injectable()
export class IndexAuthGuard implements CanActivate {

    service: AuthService;

    constructor(protected router: Router, protected authService: AuthService) {
        this.router = router;
        this.service = authService;
    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
        if (!this.service.isAuthenticated) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            this.router.navigate(['/dashboard']);
            return true;
        }

    }

}