<script>
export default {
    name: "course_card"
}
</script>

<template>
    <section>
        <router-link to="/course">
            <div class="bg-gray-2 w-[270px] h-[400px] p-5 mr-4">
                <div>
                    <img src="../assets/landing_image.png" alt="">
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptatum consequatur voluptate
                        vero quod earum at, ex porro distinctio aspernatur error sunt rerum pariatur modi incidunt fuga sit
                        deserunt numquam!</p>
                </div>
            </div>
        </router-link>
    </section>
</template>