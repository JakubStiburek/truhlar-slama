<script>
    import Contacts from "../components/Contacts.svelte";
</script>

<div class="grid 2xl:grid-cols-2 grid-cols-1 justify-center w-max mx-auto">
    <div class="flex flex-col justify-center items-center mx-auto rounded p-3 bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100 w-max h-max">
        <img class="sm:w-[540px] w-[323px]" src="images/night_stand.jpg" alt="night stand">
    </div>
    <div class="flex flex-col justify-center items-start sm:p-10 p-6">
        <h2 class="sm:text-3xl text-2xl text-left pb-3">
            Truhlář Ondřej Sláma
        </h2>
        <p class="text-left sm:w-[540px] w-[320px] max-w-fit sm:text-2xl">
            Nunc vehicula ultricies gravida. In ullamcorper pulvinar bibendum. Donec sit amet aliquet felis, vitae
            lobortis dolor. Etiam molestie sed nibh sit amet faucibus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
        </p>
    </div>
    <div class="flex flex-col justify-center items-start sm:p-10 p-6 sm:text-2xl">
        <h2 class="sm:text-3xl text-2xl text-left pb-1.5">
            Kontakty
        </h2>
        <Contacts/>
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded p-3 bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100 w-max h-max">
        <img class="sm:w-[540px] w-[323px]" src="images/soap_bars.jpg" alt="soap bars">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded p-3 bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100 w-max h-max">
        <img class="sm:w-[540px] w-[323px]" src="images/night_stand_wip.jpg" alt="night stand wip">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded p-3 bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100 w-max h-max">
        <img class="sm:w-[540px] w-[323px]" src="images/bread_box_wip.jpg" alt="bread box">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded p-3 bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100 w-max h-max">
        <img class="sm:w-[540px] w-[323px]" src="images/lid.jpg" alt="lid">
    </div>
    <div class="flex flex-col justify-center items-center mx-auto rounded p-3 bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100 w-max h-max">
        <img class="sm:w-[540px] w-[323px]" src="images/shave_stand.jpg" alt="shave stand">
    </div>
</div>
