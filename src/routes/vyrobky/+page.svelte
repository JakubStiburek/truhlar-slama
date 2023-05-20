<script lang="ts">
    import Item from "../../components/Item.svelte";
    import {browser} from "$app/environment";
    import products from "../../products/products.ts"

    enum SortBy {
        Price = 'price',
        Amount = 'amount'
    }

    const sortByAmount = (products) => {
        return products.sort((a, b) => {
            let score = 0;

            if (a.amount >= b.amount) {
                score = score - 1;
            } else {
                score = score + 1;
            }

            return score;
        })
    }

    const sortByPrice = (products) => {
        return products.sort((a, b) => {
            let score = 0;

            if (a.price >= b.price) {
                score = score - 1;
            } else {
                score = score + 1;
            }

            return score;
        })
    }

    const sortProducts = (products, sortyBy: SortBy) => {
        if (sortyBy === SortBy.Price) {
            return sortByPrice(products);
        }

        if (sortyBy === SortBy.Amount) {
            return sortByAmount(products);
        }
    }

    let sortControl = SortBy.Price;

    const switchSorting = (sortBy: SortBy) => {
        sortControl = sortBy;
    }

    let mobile = false;

    if (browser) {
        mobile = window.matchMedia("(max-width: 640px)").matches;
    }
</script>

<div class="mx-auto flex flex-col items-center justify-center gap-2 xl:w-[1100px] sm:w-[650px] w-[368px]">
    <p class="mt-2 text-center sm:text-2xl text-[0.8rem]">Prohlédněte si zboží připravené k odběru nebo kousky, které
        již mají majitele. Objednávejte telefonicky nebo emailem.</p>
    <div class="flex flex-col items-center justify-end gap-2 sm:flex-row">
        <button class="rounded border p-1 light-background"
                on:click={switchSorting(SortBy.Price)}>
            Seřadit podle ceny
        </button>
        <button class="rounded border p-1 light-background"
                on:click={switchSorting(SortBy.Amount)}>
            Seřadit podle
            dostupnosti
        </button>
    </div>
    <div class="mt-5 mb-5 grid grid-cols-1 gap-4 xl:grid-cols-3 md:grid-cols-2">
        {#each sortProducts(products, sortControl) as product}
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

<style>
    .light-background {
        background-color: rgb(255, 215, 175);
    }
</style>
