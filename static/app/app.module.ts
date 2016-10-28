import {NgModule}       from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component'
import {ClientListModule} from "./components/clients-list/client-list.module";
import {CommonModule} from "./components/common/common.module";



@NgModule({
    imports: [
        CommonModule,
        ClientListModule,
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
