<script lang="ts">
    import '../app.css';
    import Logo from '../components/Logo.svelte';
    import Contacts from "../components/Contacts.svelte";
    import Burger from "../components/Burger.svelte";
    import {browser} from "$app/environment";

    export let data;

    let isMobileMenuOpen = false;

    const toggleMobileMenu = () => {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    let mobile = false;

    if (browser) {
        mobile = window.matchMedia("(max-width: 640px)").matches;
    }
</script>

<svelte.head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap');

        body {
            font-family: 'Montserrat';
            background-color: rgb(193, 182, 68);
            color: rgb(255, 215, 175)
        }
    </style>
</svelte.head>

<div class="flex h-screen flex-col justify-between mt-20">
    <div class="absolute w-[100%] top-0">
        <div class='dark-background'>
            <div class={`mx-5 flex items-center gap-5 ${mobile ? 'items-center justify-between' : 'items-start justify-start'}`}>
                <div class='h-max w-max'>
                    <Logo src={data.logoSrc}/>
                </div>
                {#if !mobile}
                    <div>
                        <a href='/'>
                            <p class='text-3xl sm:text-5xl hover:text-blue-400'>
                                Truhlář Sláma
                            </p>
                        </a>
                    </div>
                {/if}
                {#if mobile}
                    <button on:click={toggleMobileMenu}>
                        <Burger/>
                    </button>
                {:else}
                    <p class="text-3xl">·</p>
                    <a href='/vyrobky'>
                        <p class='text-3xl hover:text-blue-400'>
                            Výrobky
                        </p>
                    </a>
                {/if}
            </div>
        </div>
        {#if isMobileMenuOpen}
            <ul class="dark-background border-t border-amber-100 flex-col flex justify-center items-center gap-4 p-5">
                <li on:click={toggleMobileMenu}>
                    <a href='/'>
                        <p class='text-xl hover:text-blue-400'>
                            Domů
                        </p>
                    </a>
                </li>
                <li on:click={toggleMobileMenu}>
                    <a href='/vyrobky'>
                        <p class='text-xl hover:text-blue-400'>
                            Výrobky
                        </p>
                    </a>
                </li>
            </ul>
        {/if}
    </div>

    <div class="mx-auto mb-auto text-black">
        <slot/>
    </div>

    <div class='flex flex-col items-center justify-center dark-background'>
        <div class="h-max w-max">
            <div class="border-b border-solid border-t-teal-100 p-5">
                <Contacts/>
            </div>
            <div class="p-5 hover:text-blue-400">
                <a href="https://stiburek.dev">Web vytvořil Jakub Stibůrek</a>
            </div>
        </div>
    </div>
</div>

<style>
    .dark-background {
        background-color: rgb(161, 97, 46);
    }
</style>

