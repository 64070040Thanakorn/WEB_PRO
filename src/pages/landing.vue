<script setup>
defineProps({
    msg: String,
})
</script>
<script>
   export default {
    name: 'landing'
   }
</script>

<template>
    <div>
        <div class="bg-[#F6F6F6] h-[480px] flex justify-between px-52 items-center">
            <div class="flex flex-col pr-32">
                <h1 class="text-6xl font-bold mb-12">หาคอสเรียนออนไซด์ ที่ดีและหาได้ง่ายที่นี่</h1>
                <p class="text-[#828282] text-xl mb-12">มีพร้อมทั้ง workshops อุปการณ์ต่างๆให้พร้อม รวมถึงยังได้เรียนกับอาจารย์ที่มีคุณภาพ</p>
                <input type="text" class="mr-5 rounded-[20px] p-2 border-2 border-solid border-black" placeholder="">
            </div>
            <div>
                <img src="src/assets/landing_image.png" width="650px" height="auto"/>
            </div>
        </div>
    </div>
</template>