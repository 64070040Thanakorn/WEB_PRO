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
    // components: { router }
}
</script>

<template>
    <div class="flex basis-3/12">
        <div class="flex flex-col">
            <div>
                <router-link to="profile_course" class="text-gray-1">
                    <i class="fa-solid fa-pen"></i>
                    <span class="ml-2">{{course}}</span>
                </router-link>
            </div>
            <div>
                <router-link to="profile_edit" class="text-gray-1">
                    <i class="fa-solid fa-user-pen"></i>
                    <span class="ml-2">{{edit}}</span>
                </router-link>
            </div>
            <div>
                <router-link to="profile_history" class="text-gray-1">
                    <i class="fa-sharp fa-solid fa-clock-rotate-left"></i>
                    <span class="ml-2">{{history}}</span>
                </router-link>
            </div>
            <div>
                <router-link to="profile_payment" class="text-gray-1">
                    <i class="fa-regular fa-credit-card"></i>
                    <span class="ml-2">{{payment}}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>