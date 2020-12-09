<template>
	<div class="container">
		<router-view/>
	</div>
</template>

<script>
export default {
	mounted() {
		document.querySelector(".dropdown-trigger").dropdown();
	},
}
</script>

<style lang="scss">
	@import '~materialize-css/dist/css/materialize.min.css';
</style>
