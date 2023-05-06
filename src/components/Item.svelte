<script>
    export let src = "";
    export let title = "";
    export let description = "";
    export let price = 0;
    export let available = false;
    export let amount = 1;
    export let mobile = false;
</script>

<div class="rounded-2xl p-5 light-background">
    <img
            class="sm:w-[540px] w-[323px]"
            width={mobile ? "323" : "540"}
            height={mobile ? "430.66" : "720"}
            src={src} />
    <div class="mt-5">
        <h3 class="text-2xl">{title}</h3>
        <p>{description}</p>
        <p>{available ? `K dispozici ${amount} ks` : "Není dostupné"}</p>
        <p class={`font-bold text-red-500 ${!available && 'invisible'}`}>{price} Kč</p>
    </div>
</div>

<style>
    .light-background {
        background-color: rgb(255, 215, 175);
    }
</style>