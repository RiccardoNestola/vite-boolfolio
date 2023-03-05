<script lang="js">
import AppCard from '../components/AppCard.vue';
import axios from 'axios';

export default {
    name: 'ProjectList',
    components: {
        AppCard
    },

    data() {
        return {
            projects: [],
            ApiUrl: 'http://127.0.0.1:8000/api/projects/',
        }
    },
    methods: {
        getProjects() {
            axios.get(this.ApiUrl, {
                params: {
                }
            })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projects = response.data.results.data;
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    },

    created() {
        this.getProjects();
    }

}
</script>

<template>
    <main>
        <div class="container">
            <AppCard v-for="project in projects" :projectCard="project" />
        </div>
    </main>
</template>

<style lang="scss"></style>