<script>

export default {
    name: "profile_course_card",
    props: {
        category: String,
        name: String,
        dec: String,
        teacher: String,
        start_date: String,
        end_date: String,
    }
}
</script>

<template>
    <div class="flex justify-between bg-white my-5 p-5 rounded-[20px]">
        <div class="container flex basis-3/12">
            <img src="../assets/landing_image.png">
        </div>
        <div class="container flex flex-col basis-9/12 ml-4">
            <p class="text-yellow-1">{{ category }}</p>
            <p class="text-lg">{{ name }}</p>
            <p class="text-gray-1">{{ dec }}</p>
            <p>อาจารย์: <span>{{ teacher }}</span></p>
            <p class="text-green-600">เริ่ม : <span>{{ start_date }}</span></p>
            <p class="text-red-500">จบ : <span>{{ end_date }}</span></p>
        </div>
    </div>
</template>