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

<div class="grid 2xl:grid-cols-2 grid-cols-1 justify-center w-max mx-auto mt-3">
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src={mobile ? data.stoolDetailMobile : data.stoolDetail} alt="night stand">
    </div>
    <div class="flex flex-col justify-center items-start sm:p-10 p-6">
        <h2 class="sm:text-3xl text-2xl text-left pb-3 text-black">
            Truhlář Ondřej Sláma
        </h2>
        <p class="text-left sm:w-[540px] w-[320px] max-w-fit sm:text-2xl text-black">
            Chcete mít doma unikátní kousek nábytku? Jsem Váš truhlář. Prohlédněte si moji práci a kontaktujte mě, pokud
            chcete obohatit svůj domov.
        </p>
    </div>
    <div class="flex flex-col justify-center items-start sm:p-10 p-6 sm:text-2xl text-black">
        <h2 class="sm:text-3xl text-2xl text-left pb-1.5">
            Kontakty
        </h2>
        <Contacts/>
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src={mobile ? data.nightStandDetailMobile : data.nightStandDetail}
             alt="night stand wip">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src={mobile ? data.nightStandMobile : data.nightStand} alt="soap bars">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src={mobile ? data.nightStandOpenMobile : data.nightStandOpen}
             alt="bread box">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src={mobile ? data.stoolMobile : data.stool} alt="lid">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src={mobile ? data.stoolDetailFullMobile : data.stoolDetailFull}
             alt="shave stand">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src={mobile ? data.stoolWithPersonMobile : data.stoolWithPerson}
             alt="shave stand">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src={mobile ? data.stoolDetailMobile : data.stoolDetail} alt="night stand">
    </div>
</div>

<style>
    .img {
        background-color: rgb(255, 215, 175);
        padding: 8px;
        margin-bottom: 5px;
    }
</style>
