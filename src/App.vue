<script>
import course_card from "./components/course_card.vue";
import asdasd from "./components/footer.vue";
import navbar from "./components/navbar.vue";
import landing from "./views/landing.vue";
import login from "./views/login.vue";
import profile from "./views/profile/profile_main.vue";
import register from "./views/register.vue";

// import { useFetchStore } from '@/stores/counter';
// import { storeToRefs } from 'pinia';
// const store = useFetchStore()
// const { users } = storeToRefs(store);
// const { auth } = store

export default {
  data() {
    return {
      loginState: false,
      user: null,
    }
  },
  components: {
    navbar,
    landing,
    login,
    register,
    course_card,
    profile,
    asdasd,
  },
  created(){
    const user = localStorage.getItem('signedInAccount')
    if(user){
      this.loginState = localStorage.getItem('login_status') === 'true';
      this.user = JSON.parse(user);
    }
  }
}
</script>

<template>
  <navbar title="Onsite COURSE" :login_status="this.loginState"/>
  <router-view></router-view>
  <asdasd/>
</template>
