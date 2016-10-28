import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientEmptyDetailComponent, ClientDetailComponent} from './clients-list.component';

const routes:Routes = [
    {
        path: '',
        component: ClientEmptyDetailComponent,
    },
    {
        path: 'new',
        component: ClientDetailComponent,
    },
    {
        path: ':id',
        component: ClientDetailComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClientListRoutingModule {
    public static routes:Routes = routes;
}