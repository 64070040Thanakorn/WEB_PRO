<script setup>
import navbar from './components/navbar.vue';
import landing from './views/landing.vue';

</script>

<script>
export default {
    data() {

    },
    components: {
      navbar,
      landing,
    }
}
</script>

<template>
  <navbar/>
  <router-view></router-view>
</template>