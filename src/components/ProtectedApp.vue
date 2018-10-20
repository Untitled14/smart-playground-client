<template>
  <div>
    <nav-menu />
  </div>
</template>

<script>
import NavMenu from '@src/components/partials/NavMenu'

export default {
  components: {
    NavMenu
  },
  data() {
    return {
      isLoggedIn: true
    }
  }
}
</script>
