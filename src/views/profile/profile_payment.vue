<script setup>
import profile_payment_card from '../../components/profile_payment_card.vue';
</script>

<script>
export default {
    name: "profile_payment",
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
                <p class="text-xl mb-3 font-bold"><i class="fa-regular fa-credit-card"></i><span
                        class="ml-2">การชำระเงิน</span></p>
            </div>
            <hr>
            <div v-for="(credit, index) in user.creditcard" :key="index">
                <profile_payment_card :creditcard="credit.creditcard" :exp="credit.exp" :payment_methods="credit.payment_methods"></profile_payment_card>
            </div>
        </div>
    </div>
</template>