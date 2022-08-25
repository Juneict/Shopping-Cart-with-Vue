<template>
  <div>
    <h1>Cart</h1>
   <div class="product">
      
        <table class="table">
            <tr>
                <th>Item</th>
                <th>Unit</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            
            <tr v-for="(product,index) in cart" :key="index">
                <td>{{ product.name }}</td>
                <td>Pc(s)</td>
                <td>1</td>
                <td>{{product.price}}</td>
                <td><button @click="removeCartItem(product)">X</button></td>
            </tr>
           
        </table>

    </div>
  </div>
</template>

<script>
export default {
    props:['cart'],
    methods:{
        removeCartItem(product){
            this.cart.splice(this.cart.indexOf(product),1);
        }
    }
}
</script>

<style scoped>
.table{
    width: 100%;
    padding: 10px;
    color: #999;
}
th{
    font-size: 20px;
    border-bottom: 1px solid white;
    color: black;
    margin-bottom: 3px;  
}
button{
    width: 30px;
    height: 20px;
    font-size:10px;
    text-align: center;
    padding: 10px;
    background-color: #ab2626;
    border-radius: 5px;
    color: #fff;
}
</style>