export class Store {
    id: number;
    description: string;
    image: string;
    thumb: string;
    name: string;
    url?: string;

    constructor(store: any) {
        this.id = Number(store?.id) ?? -1;
        this.description = store?.description ?? '';
        this.image = store?.image ?? '';
        this.thumb = store?.thumb ?? '';
        this.name = store?.name ?? '';
        this.url = store?.url ?? '';
    }
}
