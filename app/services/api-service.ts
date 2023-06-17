import { Store } from "../models/store";

async function request<T>(url: string) {
    try {
        const response = await fetch(
            url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errData = await response.json();
            throw errData;
        }
    } catch (error) {
        throw error;
    }
}

export async function fetchStores(): Promise<Store[]> {
    try {
        const URL = 'http://localhost:9000/stores';
        const data = await request(URL);

        console.log('fetchStores', data);
        return data.map((store: JSON) => new Store(store));
    } catch (error) {
        console.error('fetchStores', error);
        throw error;
    }
}
