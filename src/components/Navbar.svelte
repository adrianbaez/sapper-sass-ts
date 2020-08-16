<script>
  import Logo from './Logo.svelte'
  import Menu from './Menu.svelte'
</script>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $spacer;
  }
  .grow {
    flex-grow: 1;
  }
</style>

<header class="container">
  <Logo />
  <Menu />
  <div class="grow" />
</header>
