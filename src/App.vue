<script setup>
import navbar from './components/navbar.vue'
import landing from './views/landing.vue'
import login from './views/login.vue'
import register from './views/register.vue'

</script>

<script>
export default {
    data() {

    },
    components: {
      navbar,
      landing,
      login,
      register,
    }
}
</script>

<template>
  <navbar/>
  <router-view></router-view>
</template>
