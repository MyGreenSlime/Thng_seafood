import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

import Profile from '../views/account/profile.vue'
import Address from '../views/account/address.vue'
import AddressDetail from '../views/account/address_detail.vue'
import Cart from '../views/account/cart.vue'

import Product from '../views/product/product.vue'
import ProductDetail from '../views/product/product_detail.vue'
import ProductCategories from '../views/product/product_categories.vue'

import Checkout from '../views/checkout/checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Address
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'detail',
    component: Profile
  },
  {
    path: '/profile/address',
    name: 'address',
    component: Address
  },
  {
    path: '/profile/address/:id',
    name: 'address_detail',
    component: AddressDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/product/:id',
    name: 'Detail',
    component: ProductDetail
  },
  {
    path: '/product/categories/:id',
    name: 'Categories',
    component: ProductCategories
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
