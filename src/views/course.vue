<script setup>
import courseData from '../../courseData.json';
import course_card from '../components/course_card.vue';
</script>

<script>
export default {
    name: 'course',
    data(){
      return{
        courseData: courseData
      }
    },
    computed:{
      courseId(){
        return parseInt(this.$route.params.id)
      },
      course(){
        return courseData.find(course => course.course_id === this.courseId)
      }
    },
}
</script>

<template>
    <section>
        <div class="container mx-auto flex flex-col">

            <!-- This course -->
            <div class="flex my-12">
                <div class="flex flex-col basis-8/12">
                    <div class="flex flex-col border-2 border-black bg-white rounded-[15px]">
                        <div class="flex justify-between m-4">
                            <div class="container">
                                <img src="../assets/landing_image.png" alt="">
                            </div>
                            <div class="container ml-32">
                                <h1 class="text-4xl ">{{ course.name}}</h1>
                                <p class="text-gray-3">{{ course.category }}</p>
                                <p>{{ course.price }}.00 บาท</p>
                                <div class="flex">
                                    <i class="fa-solid fa-users translate-y-1"></i>
                                    <p class="ml-2">{{ course.amount }}/{{ course.max_amount }}</p>
                                </div>
                                <router-link :to="{name:'payment', params: {id:course.course_id}}" class="bg-yellow-1 text-white rounded-[30px] px-28 py-1">สมัครเรียน</router-link>
                            </div>
                        </div>

                        <div class="ml-5">
                            <p class="border-l-4 border-yellow-1 pl-2">ผู้สอน</p>
                            <p> {{ course.teacher }}</p>
                        </div>
                        <div class="ml-5">
                            <p class="border-l-4 border-yellow-1 pl-2">ตารางเวลา</p>
                            <p>{{ course.start_date}} - {{ course.end_date }}</p>
                        </div>
                        <div class="ml-5">
                            <p class="border-l-4 border-yellow-1 pl-2">รายละเอียด</p>
                            <p>{{ course.description }}</p>
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
                  <router-link v-for="course in courseData" :key="course.course_id" :to="{ name: 'course.show', params: { id: course.course_id } }">
                    <course_card :title="course.name" :description="course.description" :category="course.category"
                      :price="course.price"></course_card>
                  </router-link>
            </div>
            </div>
        </div>
    </section>
</template>