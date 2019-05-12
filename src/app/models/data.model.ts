export class DataModel{
    userId: number;
    id: number;
    title: string;
    body: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}