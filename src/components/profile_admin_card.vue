<script>

export default {
    name: "profile_admin_card",
    props: {
        title: String,
        description: String,
        category: String,
        price: Number,
        amount: Number,
        max_amount: Number,
        teacher: String,
    }
}
</script>

<template>
    <div class="flex justify-between bg-white my-5 p-5 rounded-[20px]">
        <div class="container flex basis-3/12">
            <img src="../assets/landing_image.png">
        </div>
        <div class="container flex flex-col basis-9/12 ml-4">
            <div class="container flex flex-col basis-9/12 ml-4">
            <p class="text-yellow-1">{{ category }}</p>
            <p class="text-lg">{{ title }}</p>
            <p class="text-gray-1">{{ description }}</p>
            <p>อาจารย์: <span>{{ teacher }}</span></p>
            <div class="flex justify-between">
                <div>
                    <p class="text-green-600">คงเหลือ: <span>{{ amount }}/{{ max_amount }}</span></p>
                    <p class="text-red-500">ราคา: <span>{{ price }}</span></p>
                </div>
                <div class="flex items-center">
                    <button class="px-6 py-1 rounded-[20px] mx-2 bg-yellow-1">แก้ไข</button>
                    <button class="px-6 py-1 rounded-[20px] mx-2 bg-red-500">ลบ</button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>