<template>
    <form action="">
        <h3>Submit your order</h3>
        <label for="">Name </label>
        <input type="text" placeholder="Enter your name">
        <label for="">Phone</label>
        <input type="number" placeholder="Enter your phone number">
        <label for="">Address</label>
        <input type="text" placeholder="Enter your address">
          <div class="submit">
            <button>Submit</button>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style>
    form{
        width: 420px;
        margin: 30px auto;
        background: white;
        text-align: center;
        padding: 40px;
        border-radius: 10px;
    }
    label{
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
     input, select{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555; 
    } 
     button{
        background: #0e7d3b;;
        border: 0;
        padding: 10px 20px;
        color: white;
        margin-top: 20px;
        border-radius: 20px;
    }
</style>