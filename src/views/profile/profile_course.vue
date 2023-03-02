<script setup>
import profile_course_card from '../../components/profile_course_card.vue';
defineProps({
    user: JSON,
    Users: Array,
    title: String,
})
</script>

<script>
    export default {
        name: "profile_course",
        data () {
            return {

            }
        }
   }
</script>

<template>
    <div class="flex flex-col basis-9/12">
        <div class="flex flex-col">
            <div class="flex justify-end">
                <p class="text-xl mb-3 font-bold"><i class="fa-solid fa-pen"></i><span class="ml-2">{{title}}</span></p>
            </div>
            <hr>
            <profile_course_card></profile_course_card>
            <profile_course_card></profile_course_card>
            <profile_course_card></profile_course_card>
        </div>
    </div>
</template>