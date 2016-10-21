import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {ClientListComponent, ClientDetailComponent, ClientMasterComponent} from './components/clients-list/clients-list.component';
import {AppRoutingModule}     from './app-routing.module';
import {HttpModule}    from '@angular/http';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
    ],
    declarations: [
        ClientListComponent,
        ClientDetailComponent,
        ClientMasterComponent
    ],
    providers: [],
    bootstrap: [ClientMasterComponent]
})
export class AppModule {
}
