import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import ProjectsList from "./pages/ProjectsList.vue";
import SingleProject from "./pages/SingleProject.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:"home",
            component: HomePage
        },

        {
            path: "/about-us",
            name: "about-us",
            component: AboutUs

        },

        {
            path: "/projects",
            name: "projects",
            component: ProjectsList

        },

        {
            path: "/project",
            name: "project",
            component: SingleProject

        }
    ]
});

export {router};