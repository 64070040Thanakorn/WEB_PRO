<script setup>
import courseData from '../../courseData.json';
import btn from '/src/components/btn.vue';

</script>
<script>
export default {
  name: "landing",
  data() {
    return {
      courseData: courseData,
      type: null
    }
  },
  computed: {
    fillterByCategory() {
      if (!this.type) return courseData
      if (this.type === 'Datatype') {
        return courseData.filter(course => course.category === this.type)
      } else if (this.type === 'UX/UI') {
        return courseData.filter(course => course.category === this.type)
      }
      else if (this.type === 'Database') {
        return courseData.filter(course => course.category === this.type)
      }
    }
  }
};

</script>

<template>
  <section>
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
      <btn @click="$event => type = null" title="All" class="bg-yellow-1"></btn>
      <btn @click="$event => type = 'Database'" title="Database" class="bg-gray-3 text-brown-2"></btn>
      <btn @click="$event => type = 'UX/UI'" title="UX/UI Design" class="bg-gray-3 text-brown-2"></btn>
      <div class="grid grid-cols-4 gap-8 my-5 justify-items-center">
        <router-link v-for="course in fillterByCategory" :key="course.course_id"
          :to="{ name: 'course.show', params: { id: course.course_id } }">
          <course_card :title="course.name" :description="course.description" :category="course.category"
            :price="course.price"></course_card>
        </router-link>
      </div>
    </div>
  </section>
</template>
