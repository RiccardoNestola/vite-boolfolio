<script lang="js">
import axios from 'axios';

export default {
    name:'AppMain',
    components: {
    },

    data() {
        return {
            project: [],
            ApiUrl: 'http://127.0.0.1:8000/api/projects',
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
    
</template>

<style lang="scss">

</style>