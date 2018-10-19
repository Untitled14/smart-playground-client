<template>
  <router-view v-if="isLoggedIn"/>
  <login-form v-else/>
</template>

<script>
import LoginForm from '@src/components/partials/LoginForm'

export default {
  components: {
    LoginForm
  },
  data() {
    return {
      isLoggedIn: true
    }
  }
}
</script>
