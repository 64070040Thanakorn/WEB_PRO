<script setup>
import navbar from './components/navbar.vue'
import landing from './pages/landing.vue'

</script>

<script>
export default {
    data() {

    },
    components: {
      navbar,
      landing,
    }
}
</script>

<template>
  <navbar title="Onsite COURSE" />
  <landing />
</template>
