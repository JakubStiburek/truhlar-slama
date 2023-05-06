<script>
    import Item from "../../components/Item.svelte";
    import {browser} from "$app/environment";

    export let data;

    let mobile = false;

    if (browser) {
        mobile = window.matchMedia("(max-width: 640px)").matches;
    }
</script>

<div class="mx-auto flex flex-col items-center justify-center p-5 sm:max-w-[1240px] max-w-[612px]">
    <h1 class="text-4xl">Obchod</h1>
    <p class="text-center text-2xl">Prohlédněte si zboží připravené k odběru nebo kousky, které již mají majitele. Objednávejte telefonicky nebo emailem.</p>
<!--    <div class="mx-auto mt-3 grid w-max grid-cols-1 justify-center gap-5 2xl:grid-cols-2">-->
<!--        <Item-->
<!--                src={mobile ? data.stoolMobile : data.stool}-->
<!--                title="Stolička"-->
<!--                description="Trojnožka vyrobená z dubového masívu. Ošetřená olejem."-->
<!--                price=2800-->
<!--                available=true-->
<!--                amount=3-->
<!--                mobile={mobile}-->
<!--        />-->
<!--        <Item-->
<!--                src={mobile ? data.stoolMobile : data.stool}-->
<!--                title="Stolička typ 3"-->
<!--                description="Trojnožka vyrobená z dubového masívu. Ošetřená olejem."-->
<!--                price=3000-->
<!--                available=true-->
<!--                amount=15-->
<!--                mobile={mobile}-->
<!--        />-->
<!--        <Item-->
<!--                src={mobile ? data.stoolMobile : data.stool}-->
<!--                title="Stolička typ 2"-->
<!--                description="Trojnožka vyrobená z dubového masívu. Ošetřená olejem."-->
<!--                price=2800-->
<!--                amount=3-->
<!--                mobile={mobile}-->
<!--        />-->
<!--    </div>-->
</div>
