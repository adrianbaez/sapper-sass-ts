<script lang="ts">
  import { currentPage } from '../store'
  import type { IPage } from '../services/page'

  export let pages: IPage[] = []
  export let inline = false

  $: current = $currentPage
</script>

<style lang="scss">
  nav {
    display: flex;
    flex-direction: column;

    &.inline {
      flex-direction: row;
    }
  }

  a {
    padding: 0 $spacer / 2;
    display: block;
  }

  [aria-current] {
    text-decoration: underline;
  }
</style>

<nav class:inline>
  {#each pages as page}
    <a aria-current={current === page ? 'page' : undefined} href={page.url}>
      {page.title}
    </a>
  {/each}
</nav>
