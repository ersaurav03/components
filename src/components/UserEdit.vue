<tem<template>
	<div class="component">
		<h3>You will view user Edits here</h3>
		<p>Edit details Details</p>
		<p>Age of user {{userAge}}</p>
		<button @click="editAge">EditAge</button>
	</div>
</template>

<style scoped>
		div
	{
		background-color:green;
	}
</style>

<script >
import { eventBus } from '../main';
export default
{
	props: ['userAge'],
	methods: {
		editAge() {
			this.userAge = 30;
			// this.$emit('ageWasEdited', this.userAge);
			eventBus.$emit('ageWasEdited', this.userAge);
		}
	}
}
</script>