<script>
    export let thumbnail = "";
    export let title = "";
    export let description = "";
    export let price = 0;
    export let amount = 0;
    export let mobile = false;
</script>

<div class="rounded p-3 light-background max-w-max">
    <img
            class="sm:w-[540px] w-[323px]"
            width={mobile ? "323" : "540"}
            height={mobile ? "323" : "540"}
            src={thumbnail} />
    <div class="mt-5 sm:w-[540px] w-[323px]">
        <h3 class="pb-5 text-2xl">{title}</h3>
        <p class="pb-5 text-justify">{description}</p>
        <p class="font-bold text-2xl text-color slama-color">{price} Kč</p>
        <p>{amount > 0 ? `K dispozici ${amount} ks` : "Není dostupné"}</p>
    </div>
</div>

<style>
    .light-background {
        background-color: rgb(255, 215, 175);
    }
    .slama-color {
        color: rgb(161, 97, 46);
    }
</style>