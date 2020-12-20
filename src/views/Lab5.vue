<template>
	<div class="container">
		<h2>Решение нелинейных уравнений 2</h2>
		<p>Изучение итерационных методов решения нелинейных уравнений.</p>
		<div class="row">
			<div class="input-field col s12" v-if="text">
				<textarea v-model="text" id="textarea1" class="materialize-textarea" style="height: 150px; background: #f4f4f4;" disabled></textarea>
			</div>
			<div class="input-field col offset-s4 s4">
				<button @click="button1_click" class="btn" style="width: 100%">Сделать задание 1</button>
			</div>
		</div>
		<div class="row">
			<table v-if="table[0]">
				<thead>
					<tr>
						<th>n</th>
						<th>Xn</th>
						<th>Xn + 1</th>
						<th>|Xn + 1 - Xn|</th>
						<th>|f(Xn + 1)|</th>
					</tr>
					<tr v-for="(td, index) of table" :key="index">
						<td>{{td.n}}</td>
						<td>{{td.Xn}}</td>
						<td>{{td.Xn1}}</td>
						<td>{{td.Xn1Xn}}</td>
						<td>{{td.fXn}}</td>
					</tr>
				</thead>
			</table>
			<div class="input-field col s12" v-if="equation">
				<input v-model="equation" id="equation" type="text" class="validate" disabled>
			</div>
			<div class="input-field col offset-s4 s4">
				<button @click="button2_click" class="btn" style="width: 100%">Сделать задание 2</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: '',
			equation: '',
			table: []
		}
	},
	methods: {
		printRow(i, x0, x1, eps, f) {
			this.table.push({n: i, Xn: x0, Xn1: x1, Xn1Xn: eps, fXn: f})
		},
		button1_click() {
			class FirstTask {
				constructor(a, x0) {
					this.a = a;
					this.x0 = x0; 
					this.x1;
				}

				setA(a){
					this.a = a;
				}

				setX0(x0){
					this.x0 = x0;
				}

				iteration_1() {
					let output = "", check = false;
					for (let i = 0; i <= 6 && !check; i++) {
						this.x1 = this.a / this.x0;
						if (Math.abs(this.x1 - this.x0) <= 0.001) {
							check = true;
							output = "Успешно";
						} else {
							this.x0 = this.x1;
							output = "Не успешно";
						}
					}
					return output;
				}

				iteration_2() {
					let output = "", check = false;
					for (let i = 0; i <= 6 && !check; i++) {
						this.x1 = (this.x0 + this.a / this.x0) / 2;
						if (Math.abs(this.x1 - this.x0) <= 0.001) {
							check = true;
							output = "Успешно";
						} else {
							this.x0 = this.x1;
							output = "Не успешно";
						}
					}
					return output;
				}
			}

			let outt = "Первый итерационный процесс:\n";
			let first = new FirstTask(5, 12);
			outt += first.iteration_1();
			outt += "\nВторой итерационный процесс:\n";
			first.setA(12);
			first.setX0(5);
			outt += first.iteration_2();
			this.text = outt;
		},
		button2_click() {
			this.table = []
			let row = this.text;
			let x0 = -2, i = 1,
				x1 = x0 - (2 * Math.sin(x0) - x0 + 0.4)/ (-6 * Math.sin(2 * x0) - 1),
				eps = Math.abs(x1 - x0),
				f = Math.abs(2 * Math.sin(x1) - x1 + 0.4);
			this.printRow(i, x0, x1, eps, f);
			while (Math.abs(x1 - x0) > 0.000001) {
				i++;
				x0 = x1;
				x1 = x0 - (2 * Math.sin(x0) - x0 + 0.4) / (-6 * Math.sin(2 * x0) - 1);
				eps = Math.abs(x1 - x0);
				f = Math.abs(2 * Math.sin(x1) - x1 + 0.4);
				this.printRow(i, x0, x1, eps, f);
			}
			this.equation = "2*sin(" + x1 +") - " + x1 + "+0.4 = " + f;
		}
	}
}
</script>

<style lang="scss" scoped>
input:not([type]):disabled, input:not([type])[readonly="readonly"], input[type=text]:not(.browser-default):disabled, input[type=text]:not(.browser-default)[readonly="readonly"], input[type=password]:not(.browser-default):disabled, input[type=password]:not(.browser-default)[readonly="readonly"], input[type=email]:not(.browser-default):disabled, input[type=email]:not(.browser-default)[readonly="readonly"], input[type=url]:not(.browser-default):disabled, input[type=url]:not(.browser-default)[readonly="readonly"], input[type=time]:not(.browser-default):disabled, input[type=time]:not(.browser-default)[readonly="readonly"], input[type=date]:not(.browser-default):disabled, input[type=date]:not(.browser-default)[readonly="readonly"], input[type=datetime]:not(.browser-default):disabled, input[type=datetime]:not(.browser-default)[readonly="readonly"], input[type=datetime-local]:not(.browser-default):disabled, input[type=datetime-local]:not(.browser-default)[readonly="readonly"], input[type=tel]:not(.browser-default):disabled, input[type=tel]:not(.browser-default)[readonly="readonly"], input[type=number]:not(.browser-default):disabled, input[type=number]:not(.browser-default)[readonly="readonly"], input[type=search]:not(.browser-default):disabled, input[type=search]:not(.browser-default)[readonly="readonly"], textarea.materialize-textarea:disabled, textarea.materialize-textarea[readonly="readonly"]{
	color: rgb(2, 164, 158)
}
</style>
