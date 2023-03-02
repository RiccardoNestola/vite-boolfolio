
<script>



export default {

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
    <nav class="navbar bg-dark">
        <div class="container-fluid">
            <span class="navbar-brand text-light mb-0 h1">PORTFOLIO</span>
        </div>
    </nav>
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