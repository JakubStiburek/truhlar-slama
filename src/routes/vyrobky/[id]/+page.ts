import products from "../../../products/products";

interface Load {
    params: {
        id: string;
    }
}

export function load({params}: Load) {
    return products.find((product) => product.id === params.id);
}
