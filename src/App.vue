<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {

  components: {
    AppHeader,
    AppMain,
  }

}

</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/partials/variables" as *;
@use "bootstrap/scss/bootstrap" as *;
</style>
