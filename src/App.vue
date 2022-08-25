<template>
  <header>
    
    <span class="cart-item">({{cart.length}})</span> items in Cart
    
  </header>
  <nav>
    <router-link to="/products" @addItemToCart="addItemToCart" :cart="cart">View Product</router-link> |
    <router-link to="/cart" :cart="cart">View Cart</router-link>
  </nav>
  <router-view :cart="cart"></router-view>
  
</template>
<script>
  import Products from './components/Products.vue'

  export default{
    data(){
      return{
        "page":true,
        cart:[],
      }
    },
    components:{Products},
    props:['products'],
    methods:{
      addItemToCart(product){
        this.cart.push(product)
      }
    } 
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
header{
  height: 40px;
  background-color: #2c3e50;
  color: #ffff;
  text-align: center;
  padding-top:15px ;
}
.button{
  background-color: #999;
  color: #fff;
  border: none;
  text-decoration: none;
}

</style>
