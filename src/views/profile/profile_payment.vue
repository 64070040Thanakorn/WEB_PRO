<script setup>
import profile_payment_card from '../../components/profile_payment_card.vue';
</script>

<script>
   export default {
        name: "profile_payment"
   }
</script>

<template>
    <div class="flex flex-col basis-9/12">
        <div class="flex flex-col">
            <div class="flex justify-end">
                <p class="text-xl mb-3 font-bold"><i class="fa-regular fa-credit-card"></i><span class="ml-2">การชำระเงิน</span></p>
            </div>
            <hr>
            <profile_payment_card></profile_payment_card>
            <profile_payment_card></profile_payment_card>
            <profile_payment_card></profile_payment_card>

        </div>
    </div>
</template>