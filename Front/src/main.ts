import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import authStore, { authStoreKey } from './store/auth'
import router from './router'
import { store, key } from './store/board'
import './index.css'
import env from './libs/environment'
import DashboardLayout from './components/layouts/DashboardLayout.vue'
import EmptyLayout from './components/layouts/EmptyLayout.vue'

const config = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
  measurementId: env.FIREBASE_MEASUREMENT_ID,
}

firebase.initializeApp(config)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

const app = createApp(App)
app.component('default-layout', DashboardLayout)
app.component('empty-layout', EmptyLayout)

app.use(router)
app.use(store)
app.use(store, key)
app.provide(authStoreKey, authStore())
app.mount('#app')
