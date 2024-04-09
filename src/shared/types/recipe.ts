export interface Product {
    key: string,
    ingredientIcon: string,
    ingredientName: string,
    grossWeight: number,
    netWeight: number
};

export interface Recipe {
    id: number,
    title: string,
    ingredients: Product[],
    output: number,
    cooking: string
};