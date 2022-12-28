<script>
    import Contacts from "../components/Contacts.svelte";
</script>

<div class="grid 2xl:grid-cols-2 grid-cols-1 justify-center w-max mx-auto mt-3">
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src="images/stool-detail.jpeg" alt="night stand">
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
        <img class="sm:w-[540px] w-[323px]" src="images/night-stand-detail.jpeg" alt="night stand wip">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src="images/night-stand.jpeg" alt="soap bars">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src="images/night-stand-open.jpeg" alt="bread box">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src="images/stool.jpeg" alt="lid">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src="images/stool-detail-full.jpeg" alt="shave stand">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src="images/stool-with-person.jpeg" alt="shave stand">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded w-max h-max img">
        <img class="sm:w-[540px] w-[323px]" src="images/stool-detail.jpeg" alt="night stand">
    </div>
</div>

<style>
    .img {
        background-color: rgb(255, 215, 175);
        padding: 8px;
        margin-bottom: 5px;
    }
</style>
