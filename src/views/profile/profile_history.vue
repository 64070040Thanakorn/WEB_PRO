<script setup>
import profile_history_card from '../../components/profile_history_card.vue';
</script>

<script>
export default {
    name: "profile_history",
    created() {
        const user = localStorage.getItem('signedInAccount')
        if (user) {
            this.loginState = localStorage.getItem('login_status') === 'true';
            this.user = JSON.parse(user);
        }
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
            <profile_history_card></profile_history_card>
            <profile_history_card></profile_history_card>
            <profile_history_card></profile_history_card>

        </div>
    </div>
</template>