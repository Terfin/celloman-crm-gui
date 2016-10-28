import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientMasterComponent} from './components/clients-list/clients-list.component';
import {ClientListRoutingModule} from './components/clients-list/client-list-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard, IndexAuthGuard} from "./AuthGuard";

const routes:Routes = [
    {path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
    {path: 'login', component: LoginComponent },
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    {path: 'clients', component: ClientMasterComponent, children: ClientListRoutingModule.routes, canActivate: [AuthGuard]},
    {path: '*', redirectTo: '/login', pathMatch: 'full'},

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}