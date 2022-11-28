<script>
    import "../app.css";
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
  <div class="flex justify-between items-center w-max h-max p-5 m-auto text-3xl gap-5">
    <a href="/store" class="hover:underline">store</a>
    <a href="/custom" class="hover:underline">custom</a>
    <a href="/slama" class="hover:underline">slama</a>
  </div>
</div>

<slot/>

