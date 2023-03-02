<script setup>
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
    computed: {
        courseQuery() {
            for (let i = 0; i < this.courseData.length; i++) {
                if (this.courseData[i] === "enroll") {
                    this.enrollData = this.courseData[i]
                }
                else if (this.courseData[i] === "payment_history") {
                    this.paymentData = this.courseData[i]
                }
                else if (this.courseData[i] === "creditcard"){
                    this.creditData = this.courseData[i]
                }
            }
        },
    }
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
            <!-- <profile_history_card></profile_history_card> -->
            <!-- <profile_history_card></profile_history_card> -->
            <profile_history_card></profile_history_card>

            <!-- <div v-for="course in user.enroll" :key="course.course_id">
                {{ course }}
            </div> -->
            <router-link v-for="course in user.enroll" :key="course.course_id" :to="{ name: 'course.show', params: { id: course.course_id }}">

                <profile_history_card :name="course.name" :start_date="course.start_date" :end_date="course.end_date" ></profile_history_card>
            </router-link>
        </div>
    </div>
</template>