<script setup>
import profile_admin_card from '../../components/profile_admin_card.vue'
import courseData from '/courseData.json'
// import router from '../../router';
</script>

<script>
export default {
    name: "profile_admin",
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
                <p class="text-xl mb-3 font-bold"><i class="fa-solid fa-lock"></i><span class="ml-2">แอดมิน</span></p>
                
            </div>
            <hr>
            <div class="flex justify-end">
                <button class="px-6 py-1 rounded-[20px] mx-2 mt-5 bg-green-500 text-white w-[20%]">เพิ่ม</button>
             </div>

                <router-link v-for="course in courseData" :key="course.course_id" :to="{ name: 'course.show', params: { id: course.course_id }}">
                    <profile_admin_card :title="course.name" :description="course.description" :category="course.category" :price="course.price" :amount="course.amount" :max_amount="course.max_amount" :teacher="course.teacher"></profile_admin_card>
                </router-link>
        </div>
    </div>
</template>