<script setup>
import course_card from "./components/course_card.vue";
import navbar from "./components/navbar.vue";
import landing from "./views/landing.vue";
import login from "./views/login.vue";
import register from "./views/register.vue";
import profile from "./views/profile.vue";

</script>

<script>
export default {
  data() {
    return {
      login_status: false,
      user_id: 101,
      // first_name: null,
      // last_name: null,
      // email: null,
      // password: null,
      // info: null,
      // phone: null,
      // address: null,
    }
  },
  components: {
    navbar,
    landing,
    login,
    register,
    course_card,
    profile,
  }
}
</script>

<template>
  <navbar title="Onsite COURSE" :login_status="this.login_status" :user_id="this.user_id"/>
  <router-view></router-view>
</template>
