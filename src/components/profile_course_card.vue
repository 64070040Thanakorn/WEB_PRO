<script>
export default {
    name: "profile_course_card"
}
</script>

<template>
    <div class="flex justify-between bg-white my-5 p-5 rounded-[20px]">
        <div class="container flex basis-3/12">
            <img src="../assets/landing_image.png">
        </div>
        <div class="container flex flex-col basis-9/12 ml-4">
            <p class="text-yellow-1">UX/UI Design</p>
            <p class="text-lg">Course name</p>
            <p class="text-gray-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consequatur laboriosam possimus quae corrupti asperiores neque perspiciatis nesciunt atque similique repudiandae tenetur, ipsum sed sapiente aut minima ab explicabo officia.</p>
            <p>อาจารย์: <span>dr Thanakorn</span></p>
            <p class="text-green-600">เริ่ม : <span>01/01/2020</span></p>
            <p class="text-red-500">จบ : <span>01/01/2021</span></p>
        </div>
    </div>
</template>