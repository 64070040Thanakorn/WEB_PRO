<script>
export default {
    name: "course_card"
}
</script>

<template>
    <section>
        <router-link to="/course">
            <div class="bg-gray-2 w-[270px] p-5 mr-4 rounded-[10px]">
                <!-- image -->
                <div>
                    <img src="../assets/landing_image.png" alt="">
                </div>
                <!-- category -->
                <div>
                    <p class="text-yellow-1">UX/UI design</p>
                </div>
                <!-- name -->
                <div>
                    <p>Usability Design and Psychology for Digital Products</p>
                </div>
                <!-- description -->
                <div>
                    <p class="text-gray-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptatum consequatur voluptate
                        vero quod earum at</p>
                </div>
                <!-- price -->
                <div class="flex justify-end">
                    <p>1990.0-</p>
                </div>
            </div>
        </router-link>
    </section>
</template>