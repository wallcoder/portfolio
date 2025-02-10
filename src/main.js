import './assets/main.css'
import { MotionPlugin } from '@vueuse/motion'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from 'vue3-particles';
import { createNotivue } from 'notivue'
import App from './App.vue'
import router from './router'
import 'notivue/notification.css' // Only needed if using built-in notifications
import 'notivue/animations.css' // Only needed if using built-in animations

const app = createApp(App)
const notivue = createNotivue({
    position: 'bottom',
    limit: 4,
    enqueue: true,
    avoidDuplicates: true,
    notifications: {
      global: {
        duration: 10000
      }
    }
  })
app.use(MotionPlugin)
app.use(createPinia())
app.use(Particles)
app.use(notivue)
app.use(router)

app.mount('#app')
