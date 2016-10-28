import {NgModule}       from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {HttpModule} from "@angular/http";
import {AuthHttp} from "../../authhttp.service";
import {AuthService} from "../../AuthService";
import {AuthGuard} from "../../AuthGuard";
import {AppRoutingModule} from "../../app-routing.module";
import {AppModalComponent} from "./app-modal.component";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2Bs3ModalModule,
        AppRoutingModule
    ],
    declarations: [
        AppModalComponent
    ],
    providers: [AuthGuard, AuthService, AuthHttp],
    exports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2Bs3ModalModule,
        AppRoutingModule,
        AppModalComponent
    ]
})
export class CommonModule {
}
