<script setup>

defineProps({
    title: String,
})
</script>

<template>
    <button class="px-6 py-1 rounded-[20px] text-xl mx-2"> {{ title }}</button>
</template>