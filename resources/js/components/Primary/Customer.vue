<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col s3">
					<h1>Customer</h1>		
				</div>
				<div class="col s9">
					<router-link to="/home">
						<button class="btnspace waves-effect waves-light btn-small">Back to Home</button>
					</router-link>
				
					<router-link to="/customer/add">
						<button class="btnspace waves-effect waves-light btn-small">Add Customer</button>
					</router-link>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-12">
					<table class="table table-condensed" >
					    <thead>
					      <tr>
					        <th>Serial Number</th>
					        <th>Name</th>
					        <th>Email</th>
					        <th>Cell Number</th>
					        <th>Edit</th>
					        <th>Delete</th>
					      </tr>
					    </thead>
					    <tbody v-for="(customer, i) in customers" :key="customer.id">
					      <tr>
					        <td>{{i+1}}</td>
					        <td>{{customer.name}}</td>
					        <td>{{customer.email}}</td>
					        <td>{{customer.cellno}}</td>
					        <td>
					        	<router-link :to="`customer/edit/${customer.id}`">
				        			<i class="far fa-edit"></i>
					        	</router-link>
					        </td>
					        <td>
					        	<a href="" @click.prevent="deleteCustomer(customer.id)">
					        		<i class="far fa-trash-alt"></i>
					        	</a>
					        </td>
					      </tr>
					    </tbody>
					</table>
				</div>
			</div>	
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			customers:[]
		}
	},
	created(){
		this.fetchCustomer()
	},
	methods:{
		fetchCustomer(){
			axios.get('/api/customer')
			.then(res => this.customers = res.data)
		},
		deleteCustomer(id){
			if(confirm('Are you Sure'))
			{
				axios.delete(`/api/customer/${id}`)
				.then(res => {
					alert('Customer Record Deleted')
					this.fetchCustomer();
				})
			}
		}
	}
}
</script>

<style scoped>
	.btnspace{
		margin: 55px 0px 10px 10px;
	}
	h1{
		font-size: 3.5rem;
	}
</style>