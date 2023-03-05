
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
            <li><router-link :to="{name:'home'}" class="nav-link px-2 link-dark"> Home</router-link></li>
            <li><router-link :to="{ name: 'projects' }" class="nav-link px-2 link-dark"> Progetti</router-link></li>
            <li><router-link :to="{ name: 'about-us' }" class="nav-link px-2 link-dark">About</router-link></li>
          </ul>
          
          <div class="col-md-3 text-end">
            <button type="button" class="btn btn-outline-primary me-2">Login</button>
            <button type="button" class="btn btn-primary">Accedi</button>
          </div>
        </header>
      </div>
    </header>

    <section>
        <div class="container py-2">
            <div class=" text-left text-dark" id="main-title">
                <h1>Hi, my name is Riccardo im a web developer, drummer and apple technician</h1>
            </div>
        </div>
    </section>
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