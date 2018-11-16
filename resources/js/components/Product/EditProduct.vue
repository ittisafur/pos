<template>
  <div>
    <div class="container">
      <div class="row">
        <form class="col s12 mt-3">
          <div class="row">
            
            <div class="input-field col s12">
              <input id="name" type="text" class="validate" v-model="product.name">
              <label for="name">Product Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="buying_price" type="text" class="validate" v-model="product.buy_price">
              <label for="buying_price">Buying Price</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="selling_price" type="text" class="validate" v-model="product.sales_price">
              <label for="selling_price">Selling Price</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="stock" type="number" class="validate" v-model="product.stock">
              <label for="stock">Stock</label>
            </div>
          </div>
          <div class="row">
            <div class="col s3">
              <button @click.prevent="editProduct" class="mc-1 waves-effect waves-light btn-small">Submit</button> 

            </div>
            <div class="col s4">
              <button @click.prevent="editProduct" class="mc-1 waves-effect waves-light btn-small">Submit</button> 
            </div>
          </div>
        </form>
      </div>
    </div>
          
  </div>
</template>

<script>
  export default {
    created(){
      axios
          .get(`/api/products/${this.$route.params.id}`)
          .then(res => (this.product = res.data))
    },
    data(){
      return{
        product: {}
      }
    },
    methods:{
      editProduct(){
          axios.put(`/api/products/${this.$router.params.id}`, this.product)
          .then(res => this.$router.push('/home'))
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
