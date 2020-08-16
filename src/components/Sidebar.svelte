<script>
  import Nav from './Nav.svelte'
  import Hamburger from './Hamburger.svelte'
  import { sidebarPages } from '../services/page'

  const pages = sidebarPages()
  export let open = false
</script>

<style lang="scss">
  aside {
    position: fixed;
    z-index: 1;
    background: $sidebar-background;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    transform: skewX(0deg) translate(100%, 0);
    transform-origin: top right;
    transition: all 0.3s ease-in;
    &.open {
      transform: skewX(8deg) translate(0, 0);
    }

    @media screen and (min-width: $breakpoint-sm) {
      width: 50%;
    }
  }

  .hamburger-container {
    z-index: 2;
    position: fixed;
    top: $spacer;
    right: $spacer;
  }

  .content {
    position: fixed;
    z-index: 2;
    transform: skewX(-8deg);
    transform-origin: top left;
    right: -100%;
    text-align: right;
    font-size: 2 * $spacer;
    line-height: 2;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    transition: all 0.3s ease-in;
    opacity: 0;
    aside.open & {
      opacity: 1;
      right: 2rem;
    }
  }
</style>

<div class="hamburger-container">
  <Hamburger bind:open />
</div>
<aside class:open>
  <div class="content">
    <Nav {pages} />
  </div>
</aside>
