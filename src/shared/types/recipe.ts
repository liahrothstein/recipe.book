interface Product {
    ingredientIcon: string,
    ingredientName: string,
    grossWeight: number,
    netWeight: number
};

export interface Recipe {
    title: string,
    ingredients: Product[],
    output: number,
    cooking: string
};