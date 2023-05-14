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

<div class="mx-auto flex flex-col items-center justify-center xl:w-[1100px] sm:w-[650px] w-[368px]">
    <p class="mt-2 text-center sm:text-2xl text-[0.8rem]">Prohlédněte si zboží připravené k odběru nebo kousky, které již mají majitele. Objednávejte telefonicky nebo emailem.</p>
    <div class="grid xl:grid-cols-3 gap-4 mt-5 mb-5 md:grid-cols-2 grid-cols-1">
        {#each sortProducts(products) as product}
            <a href={`/vyrobky/${product.id}`}>
                <Item
                        thumbnail={product.thumbnail}
                        title={product.title}
                        amount={product.amount}
                        price={product.price}
                        mobile={mobile}
                />
            </a>
        {/each}
    </div>
</div>
