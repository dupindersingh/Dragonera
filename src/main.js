// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
import store from './components/store/store'
import Type from './components/Type'
import Purpose from './components/Purpose'
import Platform from './components/Platform'
import Category from './components/Category'
import Audience from './components/Audience'
import Login from './components/Login'
import Revenue from './components/Revenue'
import Admin from './components/Admin'
import Solution from './components/Solution'
import Competitors from './components/Competitors'
import Other from './components/Other'
import Name from './components/Name'
// import router from './router'

Vue.use(vueResource)
Vue.use(vueRouter)

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/', component: Type
    },
    {
      path: '/Purpose', component: Purpose
    },
    {
      path: '/Platform', component: Platform
    },
    {
      path: '/Category', component: Category
    },
    {
      path: '/Audience', component: Audience
    },
    {
      path: '/Login', component: Login
    },
    {
      path: '/Revenue', component: Revenue
    },
    {
      path: '/Admin', component: Admin
    },
    {
      path: '/Solution', component: Solution
    },
    {
      path: '/Competitors', component: Competitors
    },
    {
      path: '/Other', component: Other
    },
    {
      path: '/Name', component: Name
    }
  ]
});
/* eslint-disable no-new */
new Vue({
  store,
  router,
  template: `<div id="app">
    <router-link to="/"></router-link>
    <router-link to="/Purpose"></router-link>
    <router-link to="/Platform"></router-link>
    <router-link to="/Category"></router-link>
    <router-link to="/Audience"></router-link>
    <router-link to="/Login"></router-link>
    <router-link to="/Revenue"></router-link>
    <router-link to="/Admin"></router-link>
    <router-link to="/Solution"></router-link>
    <router-link to="/Competitors"></router-link>
    <router-link to="/Other"></router-link>
    <router-link to="/Name"></router-link>
    <router-view></router-view>
  </div>`
}).$mount('#app')
