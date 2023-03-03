<script setup>
import courseData from "../../courseData.json";
import btn from "/src/components/btn.vue";
</script>



<script>

export default {
  name: "landing",
  data() {
    return {
      courseData: courseData,
      type: null,
      message: null,
    };
  },
  computed: {
    // filterByCategory() {
    //   if (!this.type) return courseData;
    //   if (this.type === "Datatype") {
    //     return courseData.filter((course) => course.category === this.type);
    //   } else if (this.type === "UX/UI") {
    //     return courseData.filter((course) => course.category === this.type);
    //   } else if (this.type === "Database") {
    //     return courseData.filter((course) => course.category === this.type);
    //   } else if (this.type === "Frontend") {
    //     return courseData.filter((course) => course.category === this.type);
    //   } else if (this.type === "Backend") {
    //     return courseData.filter((course) => course.category === this.type);
    //   } else if (this.type === "Vue") {
    //     return courseData.filter((course) => course.category === this.type);
    //   }
    // },
    filterMessage() {
      if (this.message) {
        return this.courseData.filter((course) => course.name.includes(this.message));
      }

      if (this.type === "Datatype") {
        return courseData.filter((course) => course.category === this.type);
      } else if (this.type === "UX/UI") {
        return courseData.filter((course) => course.category === this.type);
      } else if (this.type === "Database") {
        return courseData.filter((course) => course.category === this.type);
      } else if (this.type === "Frontend") {
        return courseData.filter((course) => course.category === this.type);
      } else if (this.type === "Backend") {
        return courseData.filter((course) => course.category === this.type);
      } else if (this.type === "Vue") {
        return courseData.filter((course) => course.category === this.type);
      }
      else {
        return courseData;
      }

    },
  },
  // watch: {
  //   message: function (value) {
  //     if (value != null) {
  //       this.courseData = this.courseData.filter((data) =>
  //         data.name.toLowerCase().includes(value.toLowerCase())
  //       );
  //     } else {
  //       this.courseData = courseData;
  //     }
  //   },
  // },
};
</script>

<template>
  <section>
    <div class="bg-gray-2 h-[480px] flex justify-between px-52 items-center">
      <div class="flex flex-col pr-32">
        <h1 class="text-6xl font-bold mb-12">
          หาคอร์สเรียนออนไซด์ ที่ดีและหาได้ง่ายที่นี่
        </h1>
        <p class="text-gray-1 text-xl mb-12">
          มีพร้อมทั้ง workshops อุปการณ์ต่างๆให้พร้อม
          รวมถึงยังได้เรียนกับอาจารย์ที่มีคุณภาพ
        </p>
        <div class="flex">
          <input type="text" class="rounded-[20px] p-2 border-2 border-solid border-black px-4 my-input flex basis-10/12"
            placeholder="ค้นหาเรื่องที่คุณอยากเรียน" v-model="this.message" />
          <!-- <div class="flex basis-2/12 items-center ml-4">
            <button type="submit" class="bg-yellow-1 p-2 px-4 rounded-[20px]" @click="search()">
              ค้นหา
            </button>
          </div> -->
        </div>
      </div>
      <div>
        <img src="src/assets/landing_image.png" />
      </div>
    </div>
    <div class="container mx-auto my-8 mb-32">
      <btn @click="($event) => (type = null)" title="All" class="bg-gray-3 text-brown-2 focus:bg-yellow-1 focus:text-black"></btn>
      <btn @click="($event) => (type = 'Database')" title="Database" class="bg-gray-3 text-brown-2 focus:bg-yellow-1 focus:text-black"></btn>
      <btn @click="($event) => (type = 'UX/UI')" title="UX/UI Design" class="bg-gray-3 text-brown-2 focus:bg-yellow-1 focus:text-black"></btn>
      <btn @click="($event) => (type = 'Frontend')" title="Frontend" class="bg-gray-3 text-brown-2 focus:bg-yellow-1 focus:text-black"></btn>
      <btn @click="($event) => (type = 'Backend')" title="Backend" class="bg-gray-3 text-brown-2 focus:bg-yellow-1 focus:text-black"></btn>
      <btn @click="($event) => (type = 'Vue')" title="Vue" class="bg-gray-3 text-brown-2 focus:bg-yellow-1 focus:text-black"></btn>

      <div class="grid grid-cols-4 gap-8 my-5 justify-items-center">
        <!-- <router-link v-for="course in filterByCategory" :key="course.course_id"
                :to="{ name: 'course.show', params: { id: course.course_id } }">
                <course_card :title="course.name" :description="course.description" :category="course.category"
                  :price="course.price"></course_card>
              </router-link> -->

        <router-link v-for="course in filterMessage" :key="course.course_id"
          :to="{ name: 'course.show', params: { id: course.course_id } }">
          <course_card :title="course.name" :description="course.description" :category="course.category"
            :price="course.price"></course_card>
        </router-link>
      </div>
    </div>
  </section>
</template>
