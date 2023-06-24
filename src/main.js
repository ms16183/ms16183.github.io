import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library }  from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowUpRightFromSquare, faBars } from '@fortawesome/free-solid-svg-icons'
import { faArtstation, faDeviantart, faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faArrowUpRightFromSquare)
library.add(faBars)
library.add(faArtstation)
library.add(faDeviantart)
library.add(faTwitter)
library.add(faFacebook)
library.add(faInstagram)
library.add(faGithub)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
