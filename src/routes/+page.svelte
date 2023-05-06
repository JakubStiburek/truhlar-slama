<script>
    import Contacts from "../components/Contacts.svelte";
    import {browser} from '$app/environment';

    export const prerender = true;

    export let data;

    let mobile = false;

    if (browser) {
        mobile = window.matchMedia("(max-width: 640px)").matches;
    }
</script>

<div class="mx-auto mt-3 grid w-max grid-cols-1 justify-center 2xl:grid-cols-2">
    <div class="mx-auto flex h-max w-max flex-col items-center justify-center rounded img">
        <img class="w-[323px] sm:w-[540px]"
             width={mobile ? "323" : "540"}
             height={mobile ? "430.66" : "720"}
             src={mobile ? data.stoolDetailMobile : data.stoolDetail} alt="night stand">
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
    <div class="mx-auto flex h-max w-max flex-col items-center justify-center rounded img">
        <img class="w-[323px] sm:w-[540px]"
             width={mobile ? "323" : "540"}
             height={mobile ? "430.66" : "720"}
             src={mobile ? data.nightStandDetailMobile : data.nightStandDetail}
             alt="night stand wip">
    </div>
    <div class="mx-auto flex h-max w-max flex-col items-center justify-center rounded img">
        <img class="w-[323px] sm:w-[540px]"
             width={mobile ? "323" : "540"}
             height={mobile ? "430.66" : "720"}
             src={mobile ? data.nightStandMobile : data.nightStand} alt="soap bars">
    </div>
    <div class="mx-auto flex h-max w-max flex-col items-center justify-center rounded img">
        <img class="w-[323px] sm:w-[540px]"
             width={mobile ? "323" : "540"}
             height={mobile ? "430.66" : "720"}
             src={mobile ? data.nightStandOpenMobile : data.nightStandOpen}
             alt="bread box">
    </div>
    <div class="mx-auto flex h-max w-max flex-col items-center justify-center rounded img">
        <img class="w-[323px] sm:w-[540px]"
             width={mobile ? "323" : "540"} src={mobile ? data.stoolMobile : data.stool}
             height={mobile ? "430.66" : "720"}
             alt="lid">
    </div>
    <div class="mx-auto flex h-max w-max flex-col items-center justify-center rounded img">
        <img class="w-[323px] sm:w-[540px]"
             width={mobile ? "323" : "540"}
             height={mobile ? "430.66" : "720"}
             src={mobile ? data.stoolDetailFullMobile : data.stoolDetailFull}
             alt="shave stand">
    </div>
    <div class="mx-auto flex h-max w-max flex-col items-center justify-center rounded img">
        <img class="w-[323px] sm:w-[540px]"
             width={mobile ? "323" : "540"}
             height={mobile ? "430.66" : "720"}
             src={mobile ? data.stoolWithPersonMobile : data.stoolWithPerson}
             alt="shave stand">
    </div>
    <div class="mx-auto flex h-max w-max flex-col items-center justify-center rounded img">
        <img class="w-[323px] sm:w-[540px]"
             width={mobile ? "323" : "540"}
             height={mobile ? "430.66" : "720"}
             src={mobile ? data.stoolDetailMobile : data.stoolDetail} alt="night stand">
    </div>
</div>

<style>
    .img {
        background-color: rgb(255, 215, 175);
        padding: 8px;
        margin-bottom: 5px;
    }
</style>
