<script setup>
import Users from '../../../users.json'
import profile_selecter from '../../components/profile_selecter.vue';
import profile_edit from './profile_edit.vue';
import profile_course from './profile_course.vue';
import profile_history from './profile_history.vue';
import profile_payment from './profile_payment.vue';
</script>

<script>
export default {
    name: "profile",
    data () {
        return {
            Users,
        }
    },

    computed:{
      userId(){
        return parseInt(this.$route.params.id)
      },
      user(){
        return Users.find(data => data.user_id === this.userId)
      }
    },
    components: {
      profile_selecter,
      profile_edit,
      profile_course,
      profile_history,
      profile_payment,
    }
}
</script>

<template>
    <section>
        <div class="bg-yellow-2 p-12 m-20 flex">
            <profile_selecter course="คอร์สของฉัน" edit="จัดการโปรไฟล์" history="ประวัติการสั่งซื้อ" payment="การชำระเงิน"></profile_selecter>
            <profile_course title="คอร์สของฉัน"></profile_course>
            <!-- <profile_edit :user="this.user" :Users="this.Users" title="จัดการโปรไฟล์"></profile_edit> -->
            <!-- <profile_history title="ประวัติการสั่งซื้อ"></profile_history> -->
            <!-- <profile_payment title="การชำระเงิน"></profile_payment> -->


            <!-- <router-view></router-view> -->
        </div>
    </section>
</template>