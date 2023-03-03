<script setup>
defineProps({
    course: String,
    edit: String,
    history: String,
    payment: String,
})
</script>

<script>
// import router from '../router';

export default {
    name: "profile_selecter",
    created(){
      const user = localStorage.getItem('signedInAccount')
      if(user){
        this.loginState = localStorage.getItem('login_status') === 'true';
        this.user = JSON.parse(user);
      }
    },
    // components: { router }
}
</script>

<template>
    <div class="flex basis-3/12">
        <div class="flex flex-col">
            <div>
                <router-link :to="{ path: '/profile/' + user.id + '/profile_course' }" class="text-gray-1">
                    <i class="fa-solid fa-pen"></i>
                    <span class="ml-2">{{course}}</span>
                </router-link>
            </div>
            <div>
                <router-link :to="{ path: '/profile/' + user.id + '/profile_edit' }" class="text-gray-1">
                    <i class="fa-solid fa-user-pen"></i>
                    <span class="ml-2">{{edit}}</span>
                </router-link>
            </div>
            <div>
                <router-link :to="{ path: '/profile/' + user.id + '/profile_history' }" class="text-gray-1">
                    <i class="fa-sharp fa-solid fa-clock-rotate-left"></i>
                    <span class="ml-2">{{history}}</span>
                </router-link>
            </div>
            <div>
                <router-link :to="{ path: '/profile/' + user.id + '/profile_payment' }" class="text-gray-1">
                    <i class="fa-regular fa-credit-card"></i>
                    <span class="ml-2">{{payment}}</span>
                </router-link>
            </div>

            <div>
                <router-link :to="{ path: '/profile/' + user.id + '/profile_admin' }" class="text-gray-1">
                    <i class="fa-solid fa-lock"></i>
                    <span class="ml-2">แอดมิน</span>
                </router-link>
            </div>
        </div>
    </div>
</template>