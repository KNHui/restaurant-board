import { Store } from "../models/store";
import { fetchStores } from "./api-service";

export class StoreService {
    stores: Store[];

    constructor() {
        this.stores = [];

        fetchStores().then(store => this.stores = store);
    }
}
