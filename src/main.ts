import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './taulwind.css'
import 'amfe-flexible/index.js'
import router from './router'
// import './utils/flexible'

createApp(App).use(router).mount('#app')
