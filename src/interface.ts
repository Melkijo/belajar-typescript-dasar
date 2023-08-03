export interface Seller {
    id: number;
    name: string;
    address?: string;
    readonly nib:string; //only can be assign once
}