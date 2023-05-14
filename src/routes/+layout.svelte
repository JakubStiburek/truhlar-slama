<script>
    import '../app.css';
    import Logo from '../components/Logo.svelte';
    import Contacts from "../components/Contacts.svelte";

    export let data;
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

<div class="flex h-screen flex-col justify-between">
    <div class='dark-background'>
        <div class='mx-5 flex items-center justify-start gap-5'>
            <div class='h-max w-max'>
                <Logo src={data.logoSrc}/>
            </div>
            <div class="flex items-end justify-start gap-2">
                <div>
                    <a href='/'>
                        <p class='text-3xl sm:text-5xl hover:text-blue-400'>
                            Truhlář Sláma
                        </p>
                    </a>
                </div>
                <p class="text-3xl">·</p>
                <button>
                    <a href='/vyrobky'>
                        <p class='text-3xl hover:text-blue-400'>
                            Výrobky
                        </p>
                    </a>
                </button>
            </div>
        </div>
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

