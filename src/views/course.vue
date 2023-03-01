<script setup>
import course_card from '../components/course_card.vue'
</script>

<script>
export default {
    name: 'course',
}
</script>

<style>
/* body {
        background-color: #F6F6F6;
    } */
</style>

<template>
    <section>
        <div class="container mx-auto flex flex-col">

            <!-- This course -->
            <div class="flex my-12">
                <div class="flex flex-col basis-8/12">
                    <div class="flex flex-col border-2 border-black bg-white rounded-[20px]">
                        <div class="flex justify-between m-4">
                            <div class="container">
                                <img src="../assets/landing_image.png" alt="">
                            </div>
                            <div class="container ml-32">
                                <h1 class="text-4xl ">Usability Design and Psychology for Digital Products</h1>
                                <p class="text-gray-3">ออกแบบ Digital Products ให้ใช้งานง่ายด้วยหลักจิตวิทยา</p>
                                <p>1,990.00 บาท</p>
                                <div class="flex">
                                    <i class="fa-solid fa-users translate-y-1"></i>
                                    <p class="ml-2">16/70</p>
                                </div>
                                <button class="btn bg-yellow-1 text-white rounded-[30px] px-28">สมัครเรียน</button>
                            </div>
                        </div>

                        <div class="ml-5">
                            <p class="border-l-4 border-yellow-1 pl-2">ผู้สอน</p>
                            <p>- dr Thanakorn Sriwannawit</p>
                        </div>
                        <div class="ml-5">
                            <p class="border-l-4 border-yellow-1 pl-2">ตารางเวลา</p>
                            <p>- 01/01/2020</p>
                        </div>
                        <div class="ml-5">
                            <p class="border-l-4 border-yellow-1 pl-2">รายละเอียด</p>
                            <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nostrum tempore deleniti eligendi error quas repellendus maiores suscipit iste quae quaerat voluptatum corrupti in dolores non, praesentium temporibus consequuntur aliquam?</p>
                        </div>


                    </div>

                </div>
                <div class="flex flex-col basis-4/12 ml-5">
                    <a class="hover:text-yellow-1 hover:bg-white w-[70%] hover:border-yellow-1 hover:border-2 rounded-[10px] px-3 text-xl">คอร์สเรียน</a>
                    <a class="hover:text-yellow-1 hover:bg-white w-[70%] hover:border-yellow-1 hover:border-2 rounded-[10px] px-3 text-xl">ผู้สอน</a>
                    <a class="hover:text-yellow-1 hover:bg-white w-[70%] hover:border-yellow-1 hover:border-2 rounded-[10px] px-3 text-xl">รายละเอียด</a>
                </div>
            </div>


            <!-- คอร์สอื่นๆ ที่น่าสนใจ -->
            <div>
                <h1 class="text-2xl">คอร์สอื่นๆ ที่น่าสนใจ</h1>
                <div class="grid grid-cols-4 gap-8 my-5 justify-items-center">
                <course_card></course_card>
                <course_card></course_card>
                <course_card></course_card>
                <course_card></course_card>
                <course_card></course_card>
                <course_card></course_card>
            </div>
            </div>
        </div>
    </section>
</template>