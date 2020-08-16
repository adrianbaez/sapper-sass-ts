<script>
  import Navbar from '../components/Navbar.svelte'
  import Sidebar from '../components/Sidebar.svelte'
  import { findPage } from '../services/page'
  import { currentPage } from '../store'
  export let segment = 'home'
  let open = false

  $: {
    const page = findPage(segment || 'home')
    currentPage.set(page)
    open = false
  }
</script>

<style>
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #444;
  }
</style>

<Sidebar bind:open />

<Navbar />

<main class="container">
  <slot />
</main>
