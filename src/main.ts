import './css'
import App from './App.vue'
import { createApp } from 'vue'
import router from './routes'

const app = createApp(App)
app.use(router).mount('#app')
