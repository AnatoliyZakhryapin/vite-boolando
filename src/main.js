import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
	faTwitter as fabTwiterr,
	faInstagram as fabInstagram,
	faFacebook as fabFacebook,
	faTiktok as fabTiktok,
	faYoutube as fabYoutube
} from '@fortawesome/free-brands-svg-icons'
import { 
	faBagShopping as fasBagShopping,
	faHeart as fasHeart,
	faHeartCirclePlus as fasHeartCirclePlus,
	faCartShopping as fasCartShopping,
	faCartPlus as fasCartPlus,
} from '@fortawesome/free-solid-svg-icons'
import {
	faUser as farUser,
	faHeart as farHeart,
	faCircleXmark as farCircleXmark
	} from '@fortawesome/free-regular-svg-icons'

library.add(
	fasBagShopping,
	farUser,
	farHeart,
	fasHeart,
	fasHeartCirclePlus,
	farCircleXmark,
	fabTwiterr,
	fabInstagram,
	fabFacebook,
	fabTiktok,
	fabYoutube,
	fasCartShopping,
	fasCartPlus,
	)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
