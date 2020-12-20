<template>
	<div id="app">
		<nav class="teal lighten-2">
			<div class="container">
				<div class="nav-wrapper">
					<router-link to="/" class="brand-logo">Вычислительные методы</router-link>
				</div>
			</div>
		</nav>
		<div class="container">
			<router-view/>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
	@import '~materialize-css/dist/css/materialize.min.css';
</style>
