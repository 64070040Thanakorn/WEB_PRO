<script setup>
import profile_course_card from '../../components/profile_course_card.vue';
import courseData from '/courseData.json'
// import router from '../../router';
</script>

<script>
export default {
    name: "profile_course",
    data() {
        return {
            courseData: courseData
        };
    },
    created() {
        const user = localStorage.getItem("signedInAccount");
        if (user) {
            this.loginState = localStorage.getItem("login_status") === "true";
            this.user = JSON.parse(user);
        }
    },
    // components: { router }
}
</script>

<template>
    <div class="flex flex-col basis-9/12">
        <div class="flex flex-col">
            <div class="flex justify-end">
                <p class="text-xl mb-3 font-bold"><i class="fa-solid fa-pen"></i><span class="ml-2">คอร์สของฉัน</span></p>
            </div>
            <hr>
            <router-link v-for="course in user.enroll" :key="course.course_id" :to="{ name: 'course.show', params: { id: course.course_id }}">
                <profile_course_card :category="course.category" :name="course.name" :dec="course.dec" :teacher="course.teacher" :start_date="course.start_date" :end_date="course.end_date"></profile_course_card>
            </router-link>
        </div>
    </div>
</template>