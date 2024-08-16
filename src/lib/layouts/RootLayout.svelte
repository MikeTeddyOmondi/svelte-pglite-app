<script>
  import Header from "$lib/components/Header.svelte";
  import MenuBar from "$lib/components/MenuBar.svelte";
</script>

<div class="flex min-h-screen w-full flex-col">
  <MenuBar />
  <Header />

  <slot />
</div>
