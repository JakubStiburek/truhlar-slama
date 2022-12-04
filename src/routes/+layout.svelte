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
            background-color: rgb(204 251 241);
        }
    </style>
</svelte.head>

<div class='bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100'>
    <div class='flex justify-start items-center mx-5 gap-5'>
        <div class='w-max h-max'>
            <Logo/>
        </div>
        <div>
            <a href='/'>
                <p class='sm:text-4xl text-2xl'>
                    Truhlář Sláma
                </p>
            </a>
        </div>
    </div>
</div>

<slot/>

<div class='bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100 h-max flex sm:flex-row flex-col justify-center items-center mx-auto'>
    <div class="p-5">
        <Contacts/>
    </div>
    <div class="sm:border-l sm:border-t-0 border-t border-solid sm:border-l-teal-100 border-t-teal-100 p-5">
        <p>Created by Jakub Stibůrek</p>
    </div>
</div>

