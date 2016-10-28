"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var client_1 = require('../models/client');
var client_service_1 = require('./client.service');
var router_1 = require("@angular/router");
var app_modal_component_1 = require("../common/app-modal.component");
var ClientMasterComponent = (function () {
    function ClientMasterComponent() {
    }
    ClientMasterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'clients-master',
            styleUrls: ['clients-master.component.css'],
            templateUrl: 'client-master.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ClientMasterComponent);
    return ClientMasterComponent;
}());
exports.ClientMasterComponent = ClientMasterComponent;
var ClientListComponent = (function () {
    function ClientListComponent(service) {
        this.service = service;
    }
    ClientListComponent.prototype.ngOnInit = function () {
        var self = this;
        self.clients = [];
        this.service.getClients().then(function (clients) {
            clients.forEach(function (client) {
                self.clients.push(client);
            });
        });
    };
    ClientListComponent.prototype.performDelete = function (client) {
        var _this = this;
        this.service.deleteClient(client).then(function () {
            var idx = _this.clients.indexOf(client);
            _this.clients.splice(idx, 1);
        });
    };
    ClientListComponent.prototype.deleteClient = function (client) {
        var _this = this;
        var config = new app_modal_component_1.AppModalConfiguration('Delete client', "Are you sure you wan to delete " + client.first_name + " " + client.last_name + "?", null);
        config.addButton(new app_modal_component_1.ModalButton('Cancel'));
        config.addButton(new app_modal_component_1.ModalButton('Delete', 'btn-danger', function () { return _this.performDelete(client); }));
        this.modal.open(config);
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', app_modal_component_1.AppModalComponent)
    ], ClientListComponent.prototype, "modal", void 0);
    ClientListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'clients-list',
            styleUrls: ['clients-list.component.css'],
            templateUrl: 'clients-list.component.html'
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService])
    ], ClientListComponent);
    return ClientListComponent;
}());
exports.ClientListComponent = ClientListComponent;
var ClientDetailComponent = (function () {
    function ClientDetailComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.client = new client_1.Client();
    }
    ClientDetailComponent.prototype.populateClient = function (client) {
        this.client.id = client.id;
        this.client.first_name = client.first_name;
        this.client.last_name = client.last_name;
        this.client.date_joined = client.date_joined;
        this.client.contact_number = client.contact_number;
        this.client.address = client.address;
        this.client.username = client.username;
        this.client.calls_to_center = client.calls_to_center;
        this.formTitle = this.client.first_name + " " + this.client.last_name + " Details";
        this.isLoading = false;
    };
    ClientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        var state = this.router.routerState;
        if (state.snapshot.url.endsWith('new')) {
            this.formTitle = 'New Customer Details';
            this.isLoading = false;
        }
        else {
            this.route.params.forEach(function (params) {
                var id = +params['id'];
                _this.service.getClient(id).then(function (client) {
                    _this.populateClient(client);
                });
            });
        }
    };
    ClientDetailComponent.prototype.validateUserName = function () {
    };
    ClientDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        var state = this.router.routerState;
        if (state.snapshot.url.endsWith('new')) {
            this.service.createClient(this.client).then(function (client) { return _this.router.navigate(['/clients', client.id]); });
        }
        else {
            this.service.updateClient(this.client).then(function (client) {
                _this.client.id = client.id;
                _this.client.first_name = client.first_name;
                _this.client.last_name = client.last_name;
                _this.client.date_joined = client.date_joined;
                _this.client.contact_number = client.contact_number;
                _this.client.address = client.address;
                _this.client.username = client.username;
                _this.client.calls_to_center = client.calls_to_center;
                _this.formTitle = _this.client.first_name + " " + _this.client.last_name + " Details";
            });
        }
    };
    ClientDetailComponent.prototype.resetClient = function (form) {
        var _this = this;
        var state = this.router.routerState;
        if (state.snapshot.url.endsWith('new')) {
            form.reset();
        }
        else {
            this.route.params.forEach(function (params) {
                var id = +params['id'];
                _this.service.getClient(id).then(function (client) {
                    _this.populateClient(client);
                });
            });
        }
    };
    ClientDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'client-detail',
            styleUrls: ['client-detail.component.css'],
            templateUrl: 'client-detail.component.html'
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, router_1.Router, router_1.ActivatedRoute])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());
exports.ClientDetailComponent = ClientDetailComponent;
var ClientEmptyDetailComponent = (function () {
    function ClientEmptyDetailComponent() {
    }
    ClientEmptyDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'client-empty',
            styleUrls: ['client-detail-empty.component.css'],
            templateUrl: 'client-detail-empty.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ClientEmptyDetailComponent);
    return ClientEmptyDetailComponent;
}());
exports.ClientEmptyDetailComponent = ClientEmptyDetailComponent;
//# sourceMappingURL=clients-list.component.js.map