import {Client} from "../models/client";

export class ClientDetailViewModel {
    formTitle: string;
    client: Client;
    isLoading: boolean;

    constructor() {
        this.client = new Client();
    }
}