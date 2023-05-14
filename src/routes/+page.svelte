<script>
    import Contacts from "../components/Contacts.svelte";
    import {browser} from '$app/environment';

    export let data;

    let mobile = false;

    if (browser) {
        mobile = window.matchMedia("(max-width: 640px)").matches;
    }
</script>

<div class="mx-auto mt-3 w-max grid grid-cols-1 justify-center items-center xl:grid-cols-2">
    <div class="mx-auto flex h-max w-max flex-col items-center justify-center rounded img">
        <img class="w-[323px] sm:w-[540px]"
             width={mobile ? "323" : "540"}
             height={mobile ? "430.66" : "720"}
             src={mobile ? data.mobileImagesUrlList[0] : data.desktopImagesUrlList[0]}
             alt="night stand">
    </div>
    <div class="flex flex-col items-start justify-center p-6 sm:p-10">
        <h2 class="pb-3 text-left text-2xl text-black sm:text-3xl">
            Truhlář Ondřej Sláma
        </h2>
        <p class="max-w-fit text-left text-black w-[320px] sm:w-[540px] sm:text-2xl">
            Chcete mít doma unikátní kousek nábytku? Jsem Váš truhlář. Prohlédněte si moji práci a kontaktujte mě, pokud
            chcete obohatit svůj domov.
        </p>
    </div>
    <div class="flex flex-col items-start justify-center p-6 text-black sm:p-10 sm:text-2xl">
        <h2 class="text-left text-2xl pb-1.5 sm:text-3xl">
            Kontakty
        </h2>
        <Contacts/>
    </div>
    {#if mobile}
        {#each [...data.mobileImagesUrlList.slice(1), data.mobileImagesUrlList[0]] as imageSrc}
            <div class="mx-auto flex h-max w-max flex-col items-center justify-center rounded img">
                <img class="w-[323px] sm:w-[540px]"
                     width="323"
                     height="430"
                     src={imageSrc}
                     alt="product image">
            </div>
        {/each}
    {:else}
        {#each [...data.desktopImagesUrlList.slice(1), data.desktopImagesUrlList[0]] as imageSrc}
            <div class="mx-auto flex h-max w-max flex-col items-center justify-center rounded img">
                <img class="w-[323px] sm:w-[540px]"
                     width="540"
                     height="720"
                     src={imageSrc}
                     alt="product image">
            </div>
        {/each}
    {/if}
</div>

<style>
    .img {
        background-color: rgb(255, 215, 175);
        padding: 8px;
        margin-bottom: 5px;
    }
</style>