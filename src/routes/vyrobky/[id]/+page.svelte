<script>
    import { browser } from "$app/environment";
    import Image from "../../../components/Image.svelte";

    export let data;

  let mobile = false;

  if (browser) {
    mobile = window.matchMedia("(max-width: 640px)").matches;
  }
</script>

<div class="mx-auto mt-5 flex flex-col items-center justify-center gap-4 xl:w-[919px] sm:w-[650px] w-[368px]">
  <Image alt="detail03" height={mobile ? "323" : "540"}
         loaderClass={mobile ? "w-[323px] h-[323px]" : "w-[540px] h-[540px]"}
         src={data.detail_02}
         width={mobile ? "323" : "540"} />

  <div class="sm:w-[540px] w-[323px] flex flex-col gap-1">
    <h2 class="text-2xl">{data.title}</h2>
    <p>{data.description}</p>
    <p class="font-bold text-md text-color slama-color">{data.price} Kč</p>
    <p class="text-sm">{data?.amount > 0 ? `K dispozici ${data.amount} ks` : "Není dostupné"}</p>
    <p class="mx-auto rounded w-max p-1 dark-background light-color"
       on:click={() => window.scrollTo({top: document.body.scrollHeight, left: 0, behavior: "smooth"})}>Objednávejte
      telefonicky nebo emailem.</p>
  </div>

  <Image alt="detail03" height={mobile ? "323" : "540"}
         loaderClass={mobile ? "w-[323px] h-[323px]" : "w-[540px] h-[540px]"}
         src={data.thumbnail}
         width={mobile ? "323" : "540"} />

  <Image alt="detail03" height={mobile ? "323" : "540"}
         loaderClass={mobile ? "w-[323px] h-[323px]" : "w-[540px] h-[540px]"}
         src={data.detail_01}
         width={mobile ? "323" : "540"} />
</div>

<style>
    .slama-color {
        color: rgb(161, 97, 46);
    }

    .light-color {
        color: rgb(255, 215, 175)
    }

    .dark-background {
        background-color: rgb(161, 97, 46);
    }
</style>
