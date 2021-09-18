import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e5c3fd9e = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _bb061a4c = () => interopDefault(import('../pages/instant-login/index.vue' /* webpackChunkName: "pages/instant-login/index" */))
const _700150c6 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _6821be1e = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _6680092a = () => interopDefault(import('../pages/test/index.vue' /* webpackChunkName: "pages/test/index" */))
const _c0eef856 = () => interopDefault(import('../pages/users/me.vue' /* webpackChunkName: "pages/users/me" */))
const _52b023ce = () => interopDefault(import('../pages/boards/_id.vue' /* webpackChunkName: "pages/boards/_id" */))
const _697b65b8 = () => interopDefault(import('../pages/boards/_boardId/invites/_id.vue' /* webpackChunkName: "pages/boards/_boardId/invites/_id" */))
const _6376d56c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _e5c3fd9e,
    name: "dashboard"
  }, {
    path: "/instant-login",
    component: _bb061a4c,
    name: "instant-login"
  }, {
    path: "/login",
    component: _700150c6,
    name: "login"
  }, {
    path: "/signup",
    component: _6821be1e,
    name: "signup"
  }, {
    path: "/test",
    component: _6680092a,
    name: "test"
  }, {
    path: "/users/me",
    component: _c0eef856,
    name: "users-me"
  }, {
    path: "/boards/:id?",
    component: _52b023ce,
    name: "boards-id"
  }, {
    path: "/boards/:boardId?/invites/:id?",
    component: _697b65b8,
    name: "boards-boardId-invites-id"
  }, {
    path: "/",
    component: _6376d56c,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
