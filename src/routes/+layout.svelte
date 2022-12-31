<script>
    import '../app.css';
    import Logo from '../components/Logo.svelte';
    import Contacts from "../components/Contacts.svelte";
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
            <Logo/>
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
    <div class="p-5">
        <Contacts/>
    </div>
    <div class="sm:border-l sm:border-t-0 border-t border-solid sm:border-l-teal-100 border-t-teal-100 p-5 hover:text-blue-400">
        <a href="https://www.linkedin.com/in/jakubstiburekdev/">Created by Jakub Stibůrek</a>
    </div>
</div>

<style>
    .dark-background {
        background-color: rgb(161, 97, 46);
    }
</style>

