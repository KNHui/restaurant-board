import { Store } from "../../models/store/store";

async function request(url: string): Promise<any> {
    try {
        const response = await fetch(
            url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            const data = await response.json();

            console.info('request done');
            console.table(data);
            return data;
        } else {
            const errData = await response.json();
            throw errData;
        }
    } catch (error) {
        console.error('request fail', error);
        throw error;
    }
}

export async function fetchStores(): Promise<Store[]> {
    try {
        const URL = 'http://localhost:9000/stores';
        const data = await request(URL);

        return Array.isArray(data) ?
            data.map((store: JSON) => new Store(store)) :
            [];
    } catch (error) {
        console.error('fetchStores', error);
        throw error;
    }
}
