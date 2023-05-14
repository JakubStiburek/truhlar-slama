<script>
    import {browser} from "$app/environment";

    export let data;

    let mobile = false;

    if (browser) {
        mobile = window.matchMedia("(max-width: 640px)").matches;
    }
</script>

<div class="mx-auto mt-5 flex flex-col items-center justify-center gap-4 xl:w-[919px] sm:w-[650px] w-[368px]">
    <img
            src={`https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/${data.id}_detail_02.jpg`}
            alt="detail02"
            width={mobile ? "323" : "540"}
            height={mobile ? "323" : "540"}
    />

    <div class="sm:w-[540px] w-[323px] flex flex-col gap-1">
        <h2 class="text-2xl">{data.title}</h2>
        <p>{data.description}</p>
        <p class="font-bold text-md text-color slama-color">{data.price} Kč</p>
        <p class="text-sm">{data.amount > 0 ? `K dispozici ${data.amount} ks` : "Není dostupné"}</p>
    </div>

    <img
            src={`https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/${data.id}_thumbnail.jpg`}
            alt="thumbnail"
            width={mobile ? "323" : "540"}
            height={mobile ? "323" : "540"}
    />

    <img
            class="mb-5"
            src={`https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/${data.id}_detail_01.jpg`}
            alt="detail01"
            width={mobile ? "323" : "540"}
            height={mobile ? "323" : "540"}
    />

</div>

<style>
    .slama-color {
        color: rgb(161, 97, 46);
    }
</style>
