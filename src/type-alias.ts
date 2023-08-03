export type ID = string | number; // union type

export type Category = {
    id: ID;
    name: string;
    desc?:string // (?) = optional property
}

export type Product = {
    id: ID;
    name: string;
    price: number;
    category: Category;
    desc?:"string"

}