<script>
   export default {
        name: "profile_payment_card",
        props: {
            creditcard: String,
            exp: String,
            payment_methods: String,
        }
   }
</script>

<template>
    <table class="text-left mt-5">
        <thead>
            <th class="border border-black">Card Number</th>
            <th class="border border-black">Expiration Date</th>
            <th colspan="2" class="border border-black">Type</th>
        </thead>
        <tbody>
            <td class="border border-black">{{creditcard}}</td>
            <td class="border border-black">{{exp}}</td>
            <td class="border-y border-black">{{payment_methods}}</td>
            <td class="text-center border-y border-r border-black"><a class="w-100 h-100 text-red-500" href="">Remove</a></td>
        </tbody>
    </table>
</template>