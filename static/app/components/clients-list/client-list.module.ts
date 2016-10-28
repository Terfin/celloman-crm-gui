import {NgModule}       from '@angular/core';
import {ClientListComponent, ClientDetailComponent, ClientMasterComponent, ClientEmptyDetailComponent} from './clients-list.component';
import {ClientService} from './client.service';
import {ClientTypeService} from "./client-type.service";
import {CommonModule} from "../common/common.module";



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ClientListComponent,
        ClientDetailComponent,
        ClientMasterComponent,
        ClientEmptyDetailComponent,
    ],
    providers: [ClientService, ClientTypeService]
})
export class ClientListModule {
}
