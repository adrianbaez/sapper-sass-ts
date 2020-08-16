<script>
  import Logo from './Logo.svelte'
  // import Menu from './Menu.svelte'
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  .grow {
    flex-grow: 1;
  }
</style>

<header class="container">
  <Logo />
  <div class="grow" />
  <!-- <Menu /> -->
</header>
