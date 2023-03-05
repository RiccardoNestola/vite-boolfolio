import { createApp } from 'vue';
import { router } from './router';
import './style.css';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faMicrochip } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faMicrochip)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')

