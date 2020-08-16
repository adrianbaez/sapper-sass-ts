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

<style lang="scss">
  :global {
    @import '../styles/global.scss';
    body {
      font-family: $default-font;
      color: $text-color;
    }
  }
</style>

<Sidebar bind:open />

<Navbar />

<main class="container">
  <slot />
</main>
