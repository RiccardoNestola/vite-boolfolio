<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppCard from './components/AppCard.vue'
export default {

  components: {
    AppHeader,
    AppMain,
    AppCard
  }

}

</script>

<template>
  <AppHeader />
  <AppCard />

  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/partials/variables" as *;
@use "bootstrap/scss/bootstrap" as *;
</style>
