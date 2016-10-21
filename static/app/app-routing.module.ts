import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientMasterComponent, ClientDetailComponent} from './components/clients-list/clients-list.component';
const routes:Routes = [
    {path: '', redirectTo: '/clients', pathMatch: 'full'},
    {path: 'clients', component: ClientMasterComponent, children: [
        {path: ':id', component: ClientDetailComponent}
    ]}

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}