<script setup>
// import { ref } from 'vue'
import '/src/App.vue'

defineProps({
  title: String,
})

</script>

<script>
export default {
  data() {
    return {
      login_status: true,
    };
  }
}
</script>
<template>
  <!-- not login -->
  <div class="bg-brown-1 p-5 flex justify-between text-white font-bold" v-if="!login_status">
    <div class="flex items-center text-2xl">{{ title }}</div>
    <div class="px-5 flex flex-row justify-around">
      <a href="">
        <img src="src/assets/search.svg">
      </a>
      <a href="" class="ml-6 flex items-center">
        หน้าหลัก
      </a>
      <a href="" class="ml-6 flex items-center">
        เข้าสู่ระบบ
      </a>
      <button class="btn bg-yellow-2 ml-6 px-4 rounded-[30px]" href="">
        ลงทะเบียน
      </button>
    </div>
  </div>

  <!-- login -->
  <div class="bg-brown-1 p-5 flex justify-between text-white font-bold" v-else>
    <div class="flex items-center text-2xl">{{ title }}</div>
    <div class="px-5 flex flex-row justify-around">
      <a href="">
        <img src="src/assets/search.svg">
      </a>
      <a href="" class="ml-6 flex items-center">
        หน้าหลัก
      </a>
      <a href="" class="ml-6">
        <img src="src/assets/user.svg">
      </a>
    </div>
  </div>
</template>


