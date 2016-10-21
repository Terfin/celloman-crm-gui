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
var ClientMasterComponent = (function () {
    function ClientMasterComponent() {
    }
    ClientMasterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'clients-master',
            templateUrl: 'client-master.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ClientMasterComponent);
    return ClientMasterComponent;
}());
exports.ClientMasterComponent = ClientMasterComponent;
var ClientListComponent = (function () {
    function ClientListComponent() {
    }
    ClientListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'clients-list',
            styleUrls: ['clients-list.component.css'],
            templateUrl: 'clients-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ClientListComponent);
    return ClientListComponent;
}());
exports.ClientListComponent = ClientListComponent;
var ClientDetailComponent = (function () {
    function ClientDetailComponent() {
    }
    ClientDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'client-detail',
            styleUrls: ['client-detail.component.css'],
            templateUrl: 'client-detail.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());
exports.ClientDetailComponent = ClientDetailComponent;
//# sourceMappingURL=clients-list.component.js.map