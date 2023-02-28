<script setup>
import btn from '/src/components/btn.vue'


</script>
<script>
export default {
    name: "landing",
};
</script>

<template>
    <div>
        <div class="bg-gray-2 h-[480px] flex justify-between px-52 items-center">
            <div class="flex flex-col pr-32">
                <h1 class="text-6xl font-bold mb-12">
                    หาคอสเรียนออนไซด์ ที่ดีและหาได้ง่ายที่นี่
                </h1>
                <p class="text-gray-1 text-xl mb-12">
                    มีพร้อมทั้ง workshops อุปการณ์ต่างๆให้พร้อม
                    รวมถึงยังได้เรียนกับอาจารย์ที่มีคุณภาพ
                </p>
                <input type="text" class="mr-5 rounded-[20px] p-2 border-2 border-solid border-black px-4 my-input"
                    placeholder="ค้นหาเรื่องที่คุณอยากเรียน" />
            </div>
            <div>
                <img src="src/assets/landing_image.png" width="650px" height="auto" />
            </div>
        </div>
        <div class="container mx-auto mt-8">
            <btn Title="All" class="bg-yellow-1" Href=""></btn>
            <btn Title="Database" class="bg-gray-3 text-brown-2" Href=""></btn>
            <btn Title="UX/UI Design" class="bg-gray-3 text-brown-2" Href=""></btn>
            <btn Title="Front-end" class="bg-gray-3 text-brown-2" Href=""></btn>
        </div>

    </div></template>
