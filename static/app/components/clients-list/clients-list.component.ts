import {Component, ViewChild} from '@angular/core';
import {Client} from '../models/client';
import {ClientService} from './client.service';
import {RouterState, Router, ActivatedRoute, Params} from "@angular/router";
import {AppModalComponent, AppModalConfiguration, ModalButton} from "../common/app-modal.component";



@Component({
    moduleId: module.id,
    selector: 'clients-master',
    styleUrls: ['clients-master.component.css'],
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

    clients: Client[];
    @ViewChild('modal')
    modal: AppModalComponent;

    constructor(private service:ClientService) {

    }

    ngOnInit() {
        let self = this;
        self.clients = [];
        this.service.getClients().then(clients => {
            clients.forEach(function (client:Client) {
                self.clients.push(client);
            })
        })
    }

    private performDelete(client: Client) {
        this.service.deleteClient(client).then(() => {
            var idx = this.clients.indexOf(client);
            this.clients.splice(idx, 1);
        })
    }

    deleteClient(client: Client) {
        var config = new AppModalConfiguration(
            'Delete client',
            `Are you sure you wan to delete ${client.first_name} ${client.last_name}?`,
            null
        );
        config.addButton(new ModalButton(
            'Cancel'
        ));
        config.addButton(new ModalButton(
            'Delete',
            'btn-danger',
            () => this.performDelete(client)
        ));

        this.modal.open(config);
    }
}

@Component({
    moduleId: module.id,
    selector: 'client-detail',
    styleUrls: ['client-detail.component.css'],
    templateUrl: 'client-detail.component.html'
})
export class ClientDetailComponent {

    formTitle: string;
    isLoading: boolean;

    private populateClient(client) {
        this.client.id = client.id;
        this.client.first_name = client.first_name;
        this.client.last_name = client.last_name;
        this.client.date_joined = client.date_joined;
        this.client.contact_number = client.contact_number;
        this.client.address = client.address;
        this.client.username = client.username;
        this.client.calls_to_center = client.calls_to_center;
        this.formTitle = `${this.client.first_name} ${this.client.last_name} Details`;
        this.isLoading = false;
    }

    ngOnInit () {
        this.isLoading = true;
        let state : RouterState = this.router.routerState;
        if (state.snapshot.url.endsWith('new')) {
            this.formTitle = 'New Customer Details';
            this.isLoading = false;
        }
        else {
            this.route.params.forEach((params: Params) => {
                let id = +params['id'];
                this.service.getClient(id).then(client => {
                    this.populateClient(client);
                });

            });

        }
    }

    constructor(private service:ClientService, private router: Router, private route: ActivatedRoute) {

    }

    client = new Client();

    validateUserName() {
        
    }
    onSubmit() {
        let state : RouterState = this.router.routerState;
        if (state.snapshot.url.endsWith('new')) {
            this.service.createClient(this.client).then(
                client => this.router.navigate(['/clients', client.id])
            );
        }
        else {
            this.service.updateClient(this.client).then(
                client => {
                    this.client.id = client.id;
                    this.client.first_name = client.first_name;
                    this.client.last_name = client.last_name;
                    this.client.date_joined = client.date_joined;
                    this.client.contact_number = client.contact_number;
                    this.client.address = client.address;
                    this.client.username = client.username;
                    this.client.calls_to_center = client.calls_to_center;
                    this.formTitle = `${this.client.first_name} ${this.client.last_name} Details`;
                }
            );
        }
    }

    resetClient(form: any) {
        let state : RouterState = this.router.routerState;
        if (state.snapshot.url.endsWith('new')) {
            form.reset();
        }
        else {
            this.route.params.forEach((params: Params) => {
                let id = +params['id'];
                this.service.getClient(id).then(client => {
                    this.populateClient(client);
                });

            });
        }
    }
}


@Component({
    moduleId: module.id,
    selector: 'client-empty',
    styleUrls: ['client-detail-empty.component.css'],
    templateUrl: 'client-detail-empty.component.html'
})
export class ClientEmptyDetailComponent {
}