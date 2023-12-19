<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>
import NavBar from '../src/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style>
</style>
