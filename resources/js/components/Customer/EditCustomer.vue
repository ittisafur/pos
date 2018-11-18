<template>
	<div>
		<div class="container">
		  <div class="row">
		    <form class="col s12 mt-3">
		      <div class="row">
		        <div class="input-field col s12">
		          <input id="name" type="text" class="validate" v-model="customer.name">
		          <label for="name">Customer Name</label>
		        </div>
		      </div>
		      <div class="row">
		        <div class="input-field col s12">
		          <input id="email" type="email" class="validate" v-model="customer.email">
		          <label for="email">Email</label>
		        </div>
		      </div>
		      <div class="row">
		        <div class="input-field col s12">
		          <input id="cellno" type="number" class="validate" v-model="customer.cellno">
		          <label for="cellno">Cell Number</label>
		        </div>
		      </div>
		      <div class="row">
		        <div class="col s3">
		          <button @click.prevent="updateCustomer" class="mc-1 waves-effect waves-light btn-small">Submit</button>    
		        </div>
		      </div>
		    </form>
		  </div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				customer:{}
			}
		},
		created(){
			axios.get(`/api/customer/${this.$route.params.id}`)
			.then( res => this.customer = res.data)
		},
		methods:{
			updateCustomer(){
				axios.put(`/api/customer/${this.$route.params.id}`, this.customer)
				.then(res => {
					alert(`Customer Updated - ${this.customer.name}`)
					if (confirm('Do you want to continue editing ?')) {
						false
					}else {
						this.$router.push('/customer')
					}
				})
			}
		}
	}
</script>

<style>
</style>