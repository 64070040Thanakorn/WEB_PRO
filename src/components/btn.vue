<script setup>

defineProps({
    title: String,
    href: String,
})
</script>

<template>
    <button class="px-6 py-1 rounded-[20px] text-xl mx-2" :href="href"> {{ title }}</button>
</template>