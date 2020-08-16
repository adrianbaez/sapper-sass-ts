<script>
  import Nav from './Nav.svelte'
  import { menuPages } from '../services/page'

  const pages = menuPages()
</script>

<Nav {pages} inline />
