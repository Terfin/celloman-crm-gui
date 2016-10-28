import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {ClientListComponent, ClientDetailComponent, ClientMasterComponent, ClientEmptyDetailComponent} from './components/clients-list/clients-list.component';
import {AppRoutingModule}     from './app-routing.module';
import {HttpModule}    from '@angular/http';
import {AppComponent} from './components/app/app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ClientService} from './components/clients-list/client.service';
import {LoginComponent} from './components/login/login.component'
import {AuthGuard} from "./AuthGuard";
import {AuthService} from "./AuthService";
import {AuthHttp} from "./authhttp.service";

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {AppModalComponent} from "./components/common/app-modal.component";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        Ng2Bs3ModalModule
    ],
    declarations: [
        ClientListComponent,
        ClientDetailComponent,
        ClientMasterComponent,
        ClientEmptyDetailComponent,
        AppComponent,
        DashboardComponent,
        LoginComponent,
        AppModalComponent
    ],
    providers: [ClientService, AuthGuard, AuthService, AuthHttp],
    bootstrap: [AppComponent]
})
export class AppModule {
}
