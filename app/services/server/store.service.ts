import { Store } from "../../models/store/store";
import { fetchStores } from "./api.service";

let stores: Store[];

export const StoreService = {
    getStores: async (): Promise<Store[]> => {
        stores = await fetchStores();
        return stores;
    }
}
