import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBagShopping as fasBagShopping } from '@fortawesome/free-solid-svg-icons'
import {
	faUser as farUser,
	faHeart as farHeart,
} from '@fortawesome/free-regular-svg-icons'

library.add(fasBagShopping, farUser, farHeart )

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
