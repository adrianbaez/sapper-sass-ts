<script>
  import Nav from './Nav.svelte'
  import Hamburger from './Hamburger.svelte'
  import { sidebarPages } from '../services/page'

  const pages = sidebarPages()
  export let open = false
</script>

<style>
  aside {
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    background: #CCC;
    height: 100%;
    width: 100%;
    transform: skewX(0deg) translate(100%, 0);
    transform-origin: top right;
    transition: all 0.3s ease-in;
  }

  aside.open {
    transform: skewX(8deg) translate(0, 0);
  }

  .hamburger-container {
    z-index: 2;
    position: fixed;
    top: 1rem;
    right: 1rem;
  }

  .content {
    position: fixed;
    z-index: 2;
    transform: skewX(-8deg);
    transform-origin: top left;
    right: -100%;
    color: #666;
    text-align: right;
    font-size: 2rem;
    line-height: 2;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    transition: all 0.3s ease-in;
    opacity: 0;
  }
  aside.open .content {
    opacity: 1;
    right: 2rem;
  }
  @media screen and (min-width: 600px) {
    aside {
      width: 50%;
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
