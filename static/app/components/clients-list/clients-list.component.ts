import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'clients-master',
    templateUrl: 'client-master.component.html'
})
export class ClientMasterComponent {
    
}

@Component({
    moduleId: module.id,
    selector: 'clients-list',
    styleUrls: ['clients-list.component.css'],
    templateUrl: 'clients-list.component.html'
})
export class ClientListComponent {
}

@Component({
    moduleId: module.id,
    selector: 'client-detail',
    styleUrls: ['client-detail.component.css'],
    templateUrl: 'client-detail.component.html'
})
export class ClientDetailComponent {
}