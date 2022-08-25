import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cart from '../components/Cart.vue'
import Products from '../components/Products.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Products
  },
  {
    path:'/products',
    name:'products',
    component:Products
  },
  {
    path:'/cart',
    name:'cart',
    component:Cart
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
