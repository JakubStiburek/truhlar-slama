<script>
    import '../app.css';
    import Logo from '../components/Logo.svelte';
    import Contacts from "../components/Contacts.svelte";

    export const prerender = true;

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

<div class='dark-background'>
    <div class='flex justify-start items-center mx-5 gap-5'>
        <div class='w-max h-max'>
            <Logo src={data.logoSrc}/>
        </div>
        <div>
            <a href='/'>
                <p class='sm:text-5xl text-3xl'>
                    Truhlář Sláma
                </p>
            </a>
        </div>
    </div>
</div>

<slot/>

<div class='h-max flex sm:flex-row flex-col justify-center items-center mx-auto dark-background'>
    <div>
        <div class="p-5 border-b border-solid border-t-teal-100 ">
            <Contacts/>
        </div>
        <div class="p-5 hover:text-blue-400">
            <a href="https://www.linkedin.com/in/jakubstiburekdev/">Created by Jakub Stibůrek</a>
        </div>
    </div>
</div>

<style>
    .dark-background {
        background-color: rgb(161, 97, 46);
    }
</style>

