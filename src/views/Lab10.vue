<template>
	<div class="container">
		<h2>Градиентные методы</h2>
		<p>F(x) = x1^2+2x2*2-2x1+x2-5 -> min</p>
		<div class="row">
			<div class="input-field col offset-s4 s4">
				<button @click="button1_click" class="btn" style="width: 100%">Сделать задание 1</button>
			</div>
		</div>
		<div class="row" v-if="text1 || text2">
			<h4 class="center-align col s12">Метод с дроблением шага</h4>
			<div class="input-field col s12">
				<pre style="background: #f4f4f4;">{{text1}}</pre>
			</div>
			<h4 class="center-align col s12">Метод наискорейшего спуска</h4>
			<div class="input-field col s12">
				<pre style="background: #f4f4f4;">{{text2}}</pre>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text1: '',
			text2: ''
		}
	},
}
</script>