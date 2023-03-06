
<script>
import AppCard from '../components/AppCard.vue';
import axios from 'axios';
export default {
    name: 'SingleProject',
    components: {
        AppCard,
    },
    data() {
        return {
            project: '',
            ApiUrl: "http://127.0.0.1:8000/api/projects/",
        };
    },
    methods: {
        getProject() {
            axios.get(`${this.ApiUrl}${this.$route.params.id}`, {
                    params: {
                    }
                })
                .then((response) => {
                    this.project = response.data.results;
                    console.warn(this.project)
                })
                .catch(function (error) {
                    console.log(error);
                });
               
        },
    },
    created() {
        this.getProject();
    },
}
</script>

<template>
    <div class="container">
        <h1>Progetto:{{ this.$route.params.id }}</h1>
        <AppCard :projectCard="project"/>
    </div>


</template>


<style lang="scss">
    
</style>