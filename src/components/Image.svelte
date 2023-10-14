<script>
  import { onMount } from "svelte";

  export let src = "";
  export let alt = "";
  export let width = "";
  export let height = "";
  export let tailwindClass = "";
  export let loaderClass = "";

  let isLoading = true;

  onMount(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      isLoading = false;
    };
  });
</script>

{#if isLoading}
  <div class={loaderClass}>
    <div class="animate-pulse h-full w-full light-background flex flex-col justify-center items-center">
      <span class="loader"></span>
    </div>
  </div>
{/if}
{#if !isLoading}
  <img
    alt={alt}
    class={tailwindClass}
    height={height}
    src="{isLoading ? '' : src}"
    width={width}
  />
{/if}

<style>
    .light-background {
        background-color: rgb(255, 215, 175);
    }

    .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #FFF;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
