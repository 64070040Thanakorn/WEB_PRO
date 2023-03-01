<script>
export default {
    name: "course_card",
    props:{
      title: String,
      description: String,
      category: String,
      price: Number
    }
}
</script>

<template>
    <section>
          <div class="bg-gray-2 w-[270px] p-5 mr-4 rounded-[10px]">
              <div>
                  <img src="../assets/landing_image.png" alt="">
              </div>
              <div>
                  <p class="text-yellow-1">{{ category }}</p>
              </div>
              <div>
                  <p>{{ title }}</p>
              </div>
              <div>
                  <p class="text-gray-1">{{ description }}</p>
              </div>
              <div class="flex justify-end">
                  <p>{{  price }}</p>
              </div>
          </div>
    </section>
</template>