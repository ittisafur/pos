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
		          <button @click.prevent="addCustomer" class="mc-1 waves-effect waves-light btn-small">Submit</button>    
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
	methods:{
		addCustomer(){
			axios.post('/api/customer', {
				name: this.customer.name,
				email: this.customer.email,
				cellno: this.customer.cellno
			})
			.then(res => {
				alert('Customer Created')
				this.customer.name = ''
				this.customer.email = ''
				this.customer.cellno = ''
				if(confirm('Do you wish to add more customers')){
					false
				}else{
					this.$router.push('/home')
				}
			})
		}
	}
}
</script>

<style>
</style>