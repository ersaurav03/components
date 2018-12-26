<template>
	<div class="components">
		<h1>The user Components</h1>
		<p>I am awsome User</p>
		<button @click="changeName">Change my nam</button>
		<p>Name is {{name}}</p>
				<p>Age is {{age}}</p>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
			<app-user-detail :name="name" @namewasReset=" name = $event" :resetFn="resetName" :userAge="age"> </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
			<app-user-edit :userAge="age" @ageWasEdited="age = $event"></app-user-edit>
            </div>
		</div>
	</div>
</template>
<script>
	import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    export default{
    	data:function()
    	{
    		return{
               name:'saurav',
               age:27
    		};
    	},
    	methods:{
    		changeName(){
    			this.name='Anna';
    		},
    		resetName()
    		{
    		this.name='saurav';
    		}
    	},
    	components:{
    		appUserDetail: UserDetail,
    		appUserEdit:UserEdit
    	}
    }
</script>
<style scoped>
	div
	{
		/*background-color: rgba(255,155,100,0.7);*/
	}
</style>