<template>
	<div class="component">
		<h3>You will view user Detals here</h3>
		<p>Many Details</p>
		<p>User Name : {{name}}</p>
		<p>User Age : {{userAge}}</p>
		<p>Reverse  Name : {{switchName()}}</p>
		<button @click="resetName">ResetName</button>
		<button @click="resetFn">ResetName</button>
		<p> name is {{name}}</p>
	</div>
</template>
<script >
	import { eventBus } from '../main';
	export default
	{
		props:{
			name:{
				type: String
			},
			resetFn:Function,
			userAge: Number
		},
		methods:
		{
			switchName(){
				return this.name.split("").reverse().join("");
			},
			resetName()
			{
				this.name='Saurav';
				this.$emit('namewasReset',this.name);
			}
		},
		created(){
			eventBus.$on('ageWasEdited', (age) => {
				this.userAge = age;
			});

		}
	}
	</script>

	<style scoped>
	div
	{
		background-color:green;
	}
</style>

