<script setup>
import course_card from './components/course_card.vue';
import navbar from './components/navbar.vue';
import landing from './views/landing.vue';
import login from './views/login.vue';
import register from './views/register.vue';

</script>

<script>
export default {
    components: {
      navbar,
      landing,
      login,
      register,
      course_card
    }
}
</script>

<template>
  <navbar title="Onsite COURSE"/>
  <router-view></router-view>
</template>
