<template>
	<div class="container">
		<h2>Отделение и уточнение корней уравнения методом половинного деления</h2>
		<p>Составить программу для отделения и уточнения корней нелинейного уравнения методом половинного деления.</p>
		<div class="row">
			<div class="input-field col s12">
				<input v-model="equation" id="equation" type="text" class="validate">
				<label for="equation" class="active">Уравнение</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s1">
				<input v-model="from" id="from" type="text" class="validate">
				<label for="from" class="active">От</label>
			</div>
			<div class="input-field col offset-s1 s1">
				<input v-model="before" id="before" type="text" class="validate">
				<label for="before" class="active">До</label>
			</div>
			<div class="input-field col offset-s6 s3">
				<input v-model="accuracy" id="accuracy" type="text" class="validate">
				<label for="accuracy"  class="active">Точность</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col offset-s7 s2">
				<button @click="fillForm" class="btn">Заполнить</button>
			</div>
			<div class="input-field col offset-s1 s2">
				<button @click="search_click" class="btn">Определить</button>
			</div>
		</div>
		<div class="row" v-if="iteration && x">
			<div class="input-field col s3">
				<input v-model="x" disabled id="x" type="text" class="validate">
				<label for="x" class="active">Корень X</label>
			</div>
			<div class="input-field col offset-s2 s3">
				<input v-model="iteration" disabled id="iteration" type="text" class="validate">
				<label for="iteration" class="active">Количество итераций</label>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			equation: '',
			from: '',
			before: '',
			x: '',
			accuracy: '',
			iteration: ''
		}
	},
	methods: {
		fillForm() {
			this.equation = 'Math.sin(x) - 0.2 * x';
			this.from = '2';
			this.before = '3';
			this.accuracy = '0.001'
		},
		func(x) {
			let equation = this.equation;
			equation = equation.replace(/x/g, x.toString());
			equation = equation.replace(",", ".");
			return eval(equation);
		},
		search_click() {
			let x1 = this.from, 
				 x2 = this.before, 
				 accuracy = this.accuracy,
				 x,
				 iteration = 0;
			while (true) {
				x = (+x1 + +x2) / 2;
				iteration++;
				if (Math.abs(this.func(x)) < accuracy) {
					break;
				}
				if (this.func(x1) * this.func(x) < 0) {
					x2 = x;
				} else {
					x1 = x;
				}
			}
			this.x = x.toString();
			this.iteration = iteration.toString();
		}
	}
}
</script>

<style lang="scss" scoped>
input:not([type]):disabled, input:not([type])[readonly="readonly"], input[type=text]:not(.browser-default):disabled, input[type=text]:not(.browser-default)[readonly="readonly"], input[type=password]:not(.browser-default):disabled, input[type=password]:not(.browser-default)[readonly="readonly"], input[type=email]:not(.browser-default):disabled, input[type=email]:not(.browser-default)[readonly="readonly"], input[type=url]:not(.browser-default):disabled, input[type=url]:not(.browser-default)[readonly="readonly"], input[type=time]:not(.browser-default):disabled, input[type=time]:not(.browser-default)[readonly="readonly"], input[type=date]:not(.browser-default):disabled, input[type=date]:not(.browser-default)[readonly="readonly"], input[type=datetime]:not(.browser-default):disabled, input[type=datetime]:not(.browser-default)[readonly="readonly"], input[type=datetime-local]:not(.browser-default):disabled, input[type=datetime-local]:not(.browser-default)[readonly="readonly"], input[type=tel]:not(.browser-default):disabled, input[type=tel]:not(.browser-default)[readonly="readonly"], input[type=number]:not(.browser-default):disabled, input[type=number]:not(.browser-default)[readonly="readonly"], input[type=search]:not(.browser-default):disabled, input[type=search]:not(.browser-default)[readonly="readonly"], textarea.materialize-textarea:disabled, textarea.materialize-textarea[readonly="readonly"]{
	color: rgb(2, 164, 158)
}
</style>
