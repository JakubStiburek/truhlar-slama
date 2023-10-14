<script>
    import Image from "./Image.svelte";

    export let thumbnail = "";
  export let title = "";
  export let price = 0;
  export let amount = 0;
</script>

<div class="rounded p-3 light-background h-max max-w-max hover:drop-shadow-2xl">
  <Image alt="Thumbnail" height="323" loaderClass="w-[323px] h-[323px]" src="{thumbnail}" tailwindClass="w-[323px]"
         width="323" />
  <div class="mt-5 w-[323px]">
    <h3 class="pb-5 text-md">{title}</h3>
    <p class="font-bold text-md text-color slama-color">{price} Kč</p>
    <p class="text-sm">{amount > 0 ? `K dispozici ${amount} ks` : "Není dostupné"}</p>
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
