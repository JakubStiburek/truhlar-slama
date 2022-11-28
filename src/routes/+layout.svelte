<script>
    import "../app.css";
    import Language from "../components/language.svelte"
    import * as cs from "../localization/cs.json"
    import * as en from "../localization/en.json"

    let localization = cs;
    let key = en.key;

    const switchLocalization = () => {
        if (localization === cs) {
            localization = en;
            key = cs.key;
        } else {
            localization = cs;
            key = en.key;
        }
    }
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

<div class="bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100">
  <div class="flex justify-between items-center mx-5">
    <div></div>
    <div class="flex justify-between items-center w-max h-max p-5 m-auto text-3xl gap-5">
      <a href="/store" class="hover:underline">{localization.layout.store}</a>
      <a href="/custom" class="hover:underline">{localization.layout.custom}</a>
      <a href="/slama" class="hover:underline">{localization.layout.slama}</a>
    </div>
    <button class="" on:click={() => switchLocalization()}><Language key={key}/></button>
  </div>
</div>

<slot/>

