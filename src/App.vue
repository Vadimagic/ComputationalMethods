<template>
	<div id="app">
		<nav class="teal lighten-2">
			<div class="container">
				<div class="nav-wrapper">
					<router-link to="/" class="brand-logo">Вычислительные методы</router-link>
					<ul id="nav-mobile" class="right hide-on-med-and-down">
						<li><router-link to="/">Лабы</router-link></li>
					</ul>
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
