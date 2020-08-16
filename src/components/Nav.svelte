<script>
  import { currentPage } from '../store'
  export let pages = []
  export let inline = false
  $: current = $currentPage
</script>

<style>
  nav {
    display: flex;
    flex-direction: column;
  }

  nav.inline {
    flex-direction: row;
  }

  a {
    padding: 0 0.5rem;
    display: block;
  }
  [aria-current] {
    text-decoration: underline;
  }
</style>
<nav class:inline>
  {#each pages as page}
    <a
      aria-current={current === page ? 'page' : undefined}
      href={page.url}>
      {page.title}
    </a>
  {/each}
</nav>
