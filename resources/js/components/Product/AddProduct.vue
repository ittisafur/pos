<template>
  <div>
    <div class="container">
      <div class="row">
        <form class="col s12 mt-3">
          <div class="row">
            <div class="input-field col s12">
              <input id="name" type="text" class="validate" ref="product_name">
              <label for="name">Product Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="buying_price" type="text" class="validate" ref="buy_price">
              <label for="buying_price">Buying Price</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="selling_price" type="text" class="validate" ref="sales_price">
              <label for="selling_price">Selling Price</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="stock" type="number" class="validate" ref="stock">
              <label for="stock">Stock</label>
            </div>
          </div>
          <div class="row">
            <div class="col s3">
              <button @click.prevent="addProduct" class="mc-1 waves-effect waves-light btn-small">Submit</button>    
            </div>
          </div>
        </form>
      </div>
    </div>
          
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      addProduct(){
          axios.post('/api/products', {
            name : this.$refs.product_name.value,
            buy_price : this.$refs.buy_price.value,
            sales_price : this.$refs.sales_price.value,
            stock :  this.$refs.stock.value
          })
          .then(res => {
            this.$refs.product_name.value = '';
            this.$refs.buy_price.value = '';
            this.$refs.sales_price.value = '';
            this.$refs.stock.value = '';
            this.$router.push('/home');
          })
          .catch(err => console.log(err));
      }
    }
  }
</script>

<style scoped>
  .mt-3{
    margin-top: 30px;
  }
  .mc-1{
    background-color: #ff8a80;
  }
</style>
