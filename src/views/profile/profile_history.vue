<script setup>
import { escapeHtml } from '@vue/shared';
import profile_history_card from '../../components/profile_history_card.vue';
import courseData from '/courseData.json'
</script>

<script>
export default {
    name: "profile_history",
    data () {
        return {
            courseData: courseData,
            enrollData: null,
            paymentData: null,
            creditData: null,

        }
    },
    created() {
        const user = localStorage.getItem('signedInAccount')
        if (user) {
            this.loginState = localStorage.getItem('login_status') === 'true';
            this.user = JSON.parse(user);
        }
        

    },
}
</script>

<template>
    <div class="flex flex-col basis-9/12">
        <div class="flex flex-col">
            <div class="flex justify-end">
                <p class="text-xl mb-3 font-bold"><i class="fa-sharp fa-solid fa-clock-rotate-left"></i><span
                        class="ml-2">ประวัติการสั่งซื้อ</span></p>
            </div>
            <hr>
            <router-link v-for="data in user.payment_history" :key="data.course_id" :to="{ name: 'course.show', params: { id: data.course_id }}">
                <profile_history_card :course_id="data.course_id" :date="data.date" :summary="data.summary" :payment_methods="data.payment_methods" :course_name="data.course_name"></profile_history_card>
            </router-link>
        </div>
    </div>
</template>