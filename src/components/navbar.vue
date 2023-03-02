<script setup>
import router from '../router';

defineProps({
  title: String,
  login_status: Boolean,
  user_id: Number,
})

</script>

<script>
export default {
    components: { router },
    data () {
      return {
      }
    }
}
</script>
<template>
  <!-- not login -->
  <div class="bg-brown-1 p-2 flex justify-between text-white font-bold" v-if="!login_status">
    <router-link to="/" class="flex items-center text-2xl">{{ title }}</router-link>
    <div class="px-5 flex flex-row justify-around">
      <a href="">
        <i class="fa-solid fa-magnifying-glass fa-3x text-yellow-1"></i>
      </a>
      <router-link to="/" class="ml-6 flex items-center">
        หน้าหลัก
      </router-link>
      <router-link to="/login" class="ml-6 flex items-center">เข้าสู่ระบบ</router-link>
      <router-link to="/register"  class="btn bg-yellow-1 ml-6 px-4 rounded-[30px] items-center flex">
        ลงทะเบียน
      </router-link>
      <router-link :to="{name: 'profile', params:{id: this.user_id}}" class="ml-6">
        <i class="fa-solid fa-circle-user fa-3x text-yellow-1"></i>
      </router-link>
    </div>
  </div>
  
  <!-- login -->
  <div class="bg-brown-1 p-2 flex justify-between text-white font-bold" v-else>
    <router-link to="/" class="flex items-center text-2xl">{{ title }}</router-link>
    <div class="px-5 flex flex-row justify-around">
      <a href="">
        <i class="fa-solid fa-magnifying-glass fa-3x text-yellow-1"></i>
      </a>
      <router-link to="/" class="ml-6 flex items-center">
        หน้าหลัก
      </router-link>
      <router-link :to="{name: 'profile.show', params:{id: this.user_id}}" class="ml-6">
        <i class="fa-solid fa-circle-user fa-3x text-yellow-1"></i>
      </router-link>
    </div>
  </div>
</template>


