
<script>



export default {
    
    name:"AppHeader",

    components: {

    },

    data() {
        return {

        }
    },

    methods: {


    }
}


</script>

<template>
    <header>
    <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            Portfolio
          </a>

          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><router-link :to="{name:'home'}" class="nav-link px-2 "       :class="this.$route.name === 'home' ? 'text-danger': 'text-dark' "> Home</router-link></li>
            <li><router-link :to="{ name: 'projects' }" class="nav-link px-2" :class="this.$route.name === 'projects' ? 'text-danger' : 'text-dark'"> Progetti</router-link></li>
            <li><router-link :to="{ name: 'about-us' }" class="nav-link px-2" :class="this.$route.name === 'about-us' ? 'text-danger' : 'text-dark'">About</router-link></li>
          </ul>

          <div class="col-md-3 text-end">
            <a type="button" class="btn btn-outline-dark me-2" href="http://127.0.0.1:8000/login">Login</a>
            <a type="button" class="btn btn-dark" href="http://127.0.0.1:8000/register">Registrati</a>
          </div>
        </header>
      </div>
    </header>

   
</template>

<style lang="scss" scoped>

   /*  @use "../styles/general.scss" as *;
    @use "../styles/partials/variables" as *; */
    @use "bootstrap/scss/bootstrap" as *;


#main-title {
    padding: 30px 30px 30px 0;
    max-width: 600px;
}

</style>