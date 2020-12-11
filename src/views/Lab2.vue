<template>
	<div class="container">
		<h2>Решение систем линейных уравнений методами итераций</h2>
		<p>Составить программу для решения системы линейных уравнений методами итераций</p>
		<div class="row">
			<div class="input-field col s3">
				<input v-model="input1_x1" id="input1-x1" type="text" class="validate">
				<label for="input1-x1" class="active">x1</label>
			</div>
			<div class="input-field col s3">
				<input v-model="input1_x2" id="input1-x2" type="text" class="validate">
				<label for="input1-x2" class="active">x2</label>
			</div>
			<div class="input-field col s3">
				<input v-model="input1_x3" id="input1-x3" type="text" class="validate">
				<label for="input1-x3" class="active">x3</label>
			</div>
			<div class="input-field col s3">
				<input v-model="cons1" type="text" class="validate">
			</div>
		</div>
		<div class="row">
			<div class="input-field col s3">
				<input v-model="input2_x1" id="input2-x1" type="text" class="validate">
				<label for="input2-x1" class="active">x1</label>
			</div>
			<div class="input-field col s3">
				<input v-model="input2_x2" id="input2-x2" type="text" class="validate">
				<label for="input2-x2" class="active">x2</label>
			</div>
			<div class="input-field col s3">
				<input v-model="input2_x3" id="input2-x3" type="text" class="validate">
				<label for="input2-x3" class="active">x3</label>
			</div>
			<div class="input-field col s3">
				<input v-model="cons2" type="text" class="validate">
			</div>
		</div>
		<div class="row">
			<div class="input-field col s3">
				<input v-model="input3_x1" id="input3-x1" type="text" class="validate">
				<label for="input3-x1" class="active">x1</label>
			</div>
			<div class="input-field col s3">
				<input v-model="input3_x2" id="input3-x2" type="text" class="validate">
				<label for="input3-x2" class="active">x2</label>
			</div>
			<div class="input-field col s3">
				<input v-model="input3_x3" id="input3-x3" type="text" class="validate">
				<label for="input3-x3" class="active">x3</label>
			</div>
			<div class="input-field col s3">
				<input v-model="cons3" type="text" class="validate">
			</div>
		</div>
		<div class="row">
			<div class="input-field col s3">
				<input v-model="accuracy" id="accuracy" type="text" class="validate">
				<label for="accuracy"  class="active">Точность</label>
			</div>
			<div class="input-field col offset-s4 s2">
				<button @click="fillForm" class="btn">Заполнить</button>
			</div>
			<div class="input-field col offset-s1 s2">
				<button @click="search_click" class="btn">Определить</button>
			</div>
		</div>
		<div class="row" v-if="iter1 && iter2">
			<div class="input-field col s6">
				<h4>Метод Якоби</h4>
			</div>
			<div class="input-field col s6">
				<h4>Метод Зейделя</h4>
			</div>
			<div class="input-field col s6">
				<input v-model="iter1" disabled id="iter1" type="text" class="validate">
				<label for="iter1" class="active">Количество итераций</label>
			</div>
			<div class="input-field col s6">
				<input v-model="iter2" disabled id="iter2" type="text" class="validate">
				<label for="iter2" class="active">Количество итераций</label>
			</div>
			<div class="input-field col s6">
				<input v-model="x1_1" disabled id="x1-1" type="text" class="validate">
				<label for="x1-1" class="active">X1</label>
			</div>
			<div class="input-field col s6">
				<input v-model="x1_2" disabled id="x1-2" type="text" class="validate">
				<label for="x1-2" class="active">X1</label>
			</div>
			<div class="input-field col s6">
				<input v-model="x2_1" disabled id="x2-1" type="text" class="validate">
				<label for="x2-1" class="active">X2</label>
			</div>
			<div class="input-field col s6">
				<input v-model="x2_2" disabled id="x2-2" type="text" class="validate">
				<label for="x2-2" class="active">X2</label>
			</div>
			<div class="input-field col s6">
				<input v-model="x3_1" disabled id="x3-1" type="text" class="validate">
				<label for="x3-1" class="active">X3</label>
			</div>
			<div class="input-field col s6">
				<input v-model="x3_2" disabled id="x3-2" type="text" class="validate">
				<label for="x3-2" class="active">X3</label>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			input1_x1: '',
			input1_x2: '',
			input1_x3: '',
			input2_x1: '',
			input2_x2: '',
			input2_x3: '',
			input3_x1: '',
			input3_x2: '',
			input3_x3: '',
			cons1: '',
			cons2: '',
			cons3: '',
			accuracy: '',
			iter1: '',
			iter2: '',
			x1_1: '',
			x1_2: '',
			x2_1: '',
			x2_2: '',
			x3_1: '',
			x3_2: ''
		}
	},
	methods: {
		fillForm() {
			this.input1_x1 = '0.61';
			this.input1_x2 = '0.71';
			this.input1_x3 = '-0.05';
			this.cons1 = '0.44';
			this.input2_x1 = '-1.03';
			this.input2_x2 = '-2.05';
			this.input2_x3 = '0.87';
			this.cons2 = '-1.16';
			this.input3_x1 = '2.5';
			this.input3_x2 = '-3.12';
			this.input3_x3 = '-5.03';
			this.cons3 = '-7.5';
			this.accuracy = '0.001';
		},

		diagonal(arr, cons) {
			const ind = [];
			const temp = [];
			const maxind = [];
			for (let i = 0; i < 3; i++) {
				if (arr[0][i] > arr[0, ind[0]]) { 
					ind[0] = i; maxind[0] = arr[0][i];
				}
				if (arr[1, i] > arr[1, ind[1]]) { 
					ind[1] = i; maxind[1] = arr[1][i];
				}
				if (arr[2, i] > arr[2, ind[2]]) {
					ind[2] = i; maxind[2] = arr[2][i];
				}
			}
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					if (ind[i] == j && i != j && arr[i][j] > arr[j][j]) {
						for (let st = 0; st < 3; st++) {
							temp[st] = arr[j][st];
							arr[j][st] = arr[i][st];
							arr[i][st] = temp[st];
							temp[st] = cons[j];
							cons[j] = cons[i];
							cons[i] = temp[st];
						}
					}
				}
			}
			maxind[0] = arr[0][0];
			maxind[1] = arr[1][1];
			maxind[2] = arr[2][2];
			for (let i = 0; i < 3; i++) {
					cons[i] = cons[i] / maxind[i];
				for (let j = 0; j < 3; j++) {
					arr[i][j] = arr[i][j] / maxind[i];
				}
			}
		},

		check(Tempiter, iter, accuracy) {
			const e = [];
			for (let i = 0; i < 3; i++) {
				e[i] = Math.abs(Tempiter[i] - iter[i]);
			}
			let eMax = Math.max(...e);
			if (eMax > +accuracy) {
				return true;
			}
			return false;
		},

		search_click() {
			const arr = [[],[],[]];
			const cons = [];
			const iter = [];
			const Tempiter = [];
			let iteration = 0;
			arr[0][0] = +this.input1_x1;
			arr[0][1] = +this.input1_x2;
			arr[0][2] = +this.input1_x3;
			arr[1][0] = +this.input2_x1;
			arr[1][1] = +this.input2_x2;
			arr[1][2] = +this.input2_x3;
			arr[2][0] = +this.input3_x1;
			arr[2][1] = +this.input3_x2;
			arr[2][2] = +this.input3_x3;
			cons[0] = +this.cons1;
			cons[1] = +this.cons2;
			cons[2] = +this.cons3;
			for (let i = 0; i < 3; i++) {
				Tempiter[i] = 0;
			}
				
			let accuracy = this.accuracy;

			this.diagonal(arr, cons);
			
			do {
				for (let i = 0; i < 3; i++) {
					iter[i] = Tempiter[i];
				}
				Tempiter[0] = -arr[0][1] * iter[1] + (-arr[0][2]) * iter[2] + +cons[0];
				Tempiter[1] = -arr[1][0] * iter[0] + (-arr[1][2]) * iter[2] + +cons[1];
				Tempiter[2] = -arr[2][0] * iter[0] + (-arr[2][1]) * iter[1] + +cons[2];
				iteration++;
			} while (this.check(Tempiter, iter, accuracy));

			this.x1_1 = Tempiter[0].toFixed(3).toString();
			this.x2_1 = Tempiter[1].toFixed(3).toString();
			this.x3_1 = Tempiter[2].toFixed(3).toString();
			this.iter1 = iteration.toString();


			for (let i = 0; i < 3; i++){
				Tempiter[i] = 0;
			}
			iteration = 0;
			do {
				for (let i = 0; i < 3; i++) {
					iter[i] = Tempiter[i];
				}
				Tempiter[0] = -arr[0][1] * Tempiter[1] + (-arr[0][2]) * Tempiter[2] + +cons[0];
				Tempiter[1] = -arr[1][0] * Tempiter[0] + (-arr[1][2]) * Tempiter[2] + +cons[1];
				Tempiter[2] = -arr[2][0] * Tempiter[0] + (-arr[2][1]) * Tempiter[1] + +cons[2];
				iteration++;
			} while (this.check(Tempiter, iter, accuracy)) ;

			this.x1_2 = Tempiter[0].toFixed(3).toString();
			this.x2_2 = Tempiter[1].toFixed(3).toString();
			this.x3_2 = Tempiter[2].toFixed(3).toString();
			this.iter2 = iteration.toString();
		}
	}
}
</script>

<style lang="scss" scoped>
input:not([type]):disabled, input:not([type])[readonly="readonly"], input[type=text]:not(.browser-default):disabled, input[type=text]:not(.browser-default)[readonly="readonly"], input[type=password]:not(.browser-default):disabled, input[type=password]:not(.browser-default)[readonly="readonly"], input[type=email]:not(.browser-default):disabled, input[type=email]:not(.browser-default)[readonly="readonly"], input[type=url]:not(.browser-default):disabled, input[type=url]:not(.browser-default)[readonly="readonly"], input[type=time]:not(.browser-default):disabled, input[type=time]:not(.browser-default)[readonly="readonly"], input[type=date]:not(.browser-default):disabled, input[type=date]:not(.browser-default)[readonly="readonly"], input[type=datetime]:not(.browser-default):disabled, input[type=datetime]:not(.browser-default)[readonly="readonly"], input[type=datetime-local]:not(.browser-default):disabled, input[type=datetime-local]:not(.browser-default)[readonly="readonly"], input[type=tel]:not(.browser-default):disabled, input[type=tel]:not(.browser-default)[readonly="readonly"], input[type=number]:not(.browser-default):disabled, input[type=number]:not(.browser-default)[readonly="readonly"], input[type=search]:not(.browser-default):disabled, input[type=search]:not(.browser-default)[readonly="readonly"], textarea.materialize-textarea:disabled, textarea.materialize-textarea[readonly="readonly"]{
	color: rgb(2, 164, 158)
}
</style>
