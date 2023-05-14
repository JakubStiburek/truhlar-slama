<script>
    import Item from "../../components/Item.svelte";
    import {browser} from "$app/environment";
    import products from "../../products/products.ts"

    const sortProducts = (products) => {
        return products.sort((a,b) => {
            let score = 0;

            if (a.amount >= b.amount) {
                score = score - 1;
            } else {
                score = score + 1;
            }

            if (a.price >= b.price) {
                score = score - 1;
            }  else {
                score = score + 1;
            }

            return score;
        })
    }

    let mobile = false;

    if (browser) {
        mobile = window.matchMedia("(max-width: 640px)").matches;
    }
</script>

<div class="mx-auto flex flex-col items-center justify-center sm:max-w-[1160px] max-w-[368px]">
    <h1 class="sm:text-4xl text-2xl mt-2">Obchod</h1>
    <p class="text-center sm:text-2xl text-center text-[0.8rem]">Prohlédněte si zboží připravené k odběru nebo kousky, které již mají majitele. Objednávejte telefonicky nebo emailem.</p>
    <div class="grid md:grid-cols-2 gap-4 mt-5 mb-5 sm:grid-cols-1">
        {#each sortProducts(products) as product}
            <Item
                    thumbnail={product.thumbnail}
                    title={product.title}
                    description={product.description}
                    amount={product.amount}
                    price={product.price}
                    mobile={mobile}
            />
        {/each}
    </div>
</div>
