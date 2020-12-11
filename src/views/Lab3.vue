<template>
	<div class="container">
		<h2>Решение систем линейных уравнений методом Гаусса</h2>
		<p>Составить программу для решения системы линейных уравнений методом Гаусса.</p>
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
			<div class="input-field col offset-s7 s2">
				<button @click="fillForm" class="btn">Заполнить</button>
			</div>
			<div class="input-field col offset-s1 s2">
				<button @click="search_click" class="btn">Определить</button>
			</div>
		</div>
		<div class="row" v-if="x1 && x2 && x3">
			<div class="input-field col s4">
				<input v-model="x1" disabled id="x1" type="text" class="validate">
				<label for="x1" class="active">X1</label>
			</div>
			<div class="input-field col s4">
				<input v-model="x2" disabled id="x2" type="text" class="validate">
				<label for="x2" class="active">X2</label>
			</div>
			<div class="input-field col s4">
				<input v-model="x3" disabled id="x3" type="text" class="validate">
				<label for="x3" class="active">X3</label>
			</div>
			<pre>{{text}}</pre>
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
			text: '\n\n\n\n',
			x1: '',
			x2: '',
			x3: ''
		}
	},
	mounted() {
		
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
		},
		printsolve(iteration, iterationName, arr, res) {
			this.text += "Шаг " + iteration + " - " + iterationName +"\n\n";
			this.text += arr[0][0].toFixed(3) + " X1 + " + arr[0][1].toFixed(3) + " X2 + " + arr[0][2].toFixed(3) + " X3 = " + res[0].toFixed(3) + "\n" 
					+ arr[1][0].toFixed(3) + " X1 + " + arr[1][1].toFixed(3) + " X2 + " + arr[1][2].toFixed(3) + " X3 = " + res[1].toFixed(3) + "\n"
					+ arr[2][0].toFixed(3) + " X1 + " + arr[2][1].toFixed(3) + " X2 + " + arr[2][2].toFixed(3) + " X3 = " + res[2].toFixed(3) + "\n\n";
		},
		gauss(arr, res) {
			let ind = 0, i, j, value, x1, x2, x3, temp = [];
			for (i = 0; i < 3; i++) {
				if (arr[i, 0] > arr[ind, 0]) {
					ind = i;
				}
			}
			for (i = 0; i < 3; i++) {
				temp[i] = arr[0][i];
				arr[0][i] = arr[ind][i];
				arr[ind][i] = temp[i];
				temp[i] = res[0];
				res[0] = res[ind];
				res[ind] = temp[i];
			}
			this.printsolve(1, "Ставим на первую строку максимальный коэффициент X1", arr, res);
			for (i = 0; i < 3; i++) {
				value = arr[i][0];
				for (j = 0; j < 3; j++) {
					arr[i][j] = arr[i][j] / value;
				}
				res[i] = res[i] / value;
			}
			this.printsolve(2, "Нормируем по X1", arr, res);
			for (i = 1; i < 3; i++) {
				for (j = 0; j < 3; j++) {
					arr[i][j] = arr[i][j] - arr[0][j];
				}
				res[i] = res[i] - res[0];
			}
			this.printsolve(3, "Вычитаем первую строку из второй и третьей", arr, res);
			if (arr[2][1] > arr[1][1]) {
				for (i = 0; i < 3; i++) {
					temp[i] = arr[1][i];
					arr[1][i] = arr[2][i];
					arr[2][i] = temp[i];
					temp[i] = res[1];
					res[1] = res[2];
					res[2] = temp[i];
				}
			}
			this.printsolve(4, "Ставим на вторую строку максимальный коэффициент Х2", arr, res);
			for (i = 1; i < 3; i++) {
				value = arr[i][1];
				for (j = 0; j < 3; j++) {
					arr[i][j] = arr[i][j] / value;
				}
				res[i] = res[i] / value;
			}
			this.printsolve(5, "Нормируем по Х2", arr, res);
			for (i = 0; i < 3; i++) {
				arr[2][i] = arr[2][i] - arr[1][i];
			}
			res[2] = res[2] - res[1];
			this.printsolve(6, "Вычитаем вторую строку из третьей", arr, res);
			res[2] = res[2] / arr[2][2];
			arr[2][2] = 1;
			this.printsolve(7, "Нормируем по Х3", arr, res);
			x3 = (res[2] / arr[2][2]).toFixed(3);
			x2 = (res[1] - arr[1][2] * x3).toFixed(3);
			x1 = (res[0] - arr[0][1] * x2 - arr[0][2] * x3).toFixed(3);
			this.text += "Шаг 8 - Рассчитываем X1, X2, X3\n\nX1 = " + x1 + "\nX2 = " + x2 + "\nX3 = " + x3 + "\n\n";
			this.x1 = x1.toString();
			this.x2 = x2.toString();
			this.x3 = x3.toString();
		},
		search_click() {
			const arr = [[],[],[]];
			const res = [];
			arr[0][0] = +this.input1_x1;
			arr[0][1] = +this.input1_x2;
			arr[0][2] = +this.input1_x3;
			arr[1][0] = +this.input2_x1;
			arr[1][1] = +this.input2_x2;
			arr[1][2] = +this.input2_x3;
			arr[2][0] = +this.input3_x1;
			arr[2][1] = +this.input3_x2;
			arr[2][2] = +this.input3_x3;
			res[0] = +this.cons1;
			res[1] = +this.cons2;
			res[2] = +this.cons3;
			this.gauss(arr, res)
		}
	}
}
</script>

<style lang="scss" scoped>
input:not([type]):disabled, input:not([type])[readonly="readonly"], input[type=text]:not(.browser-default):disabled, input[type=text]:not(.browser-default)[readonly="readonly"], input[type=password]:not(.browser-default):disabled, input[type=password]:not(.browser-default)[readonly="readonly"], input[type=email]:not(.browser-default):disabled, input[type=email]:not(.browser-default)[readonly="readonly"], input[type=url]:not(.browser-default):disabled, input[type=url]:not(.browser-default)[readonly="readonly"], input[type=time]:not(.browser-default):disabled, input[type=time]:not(.browser-default)[readonly="readonly"], input[type=date]:not(.browser-default):disabled, input[type=date]:not(.browser-default)[readonly="readonly"], input[type=datetime]:not(.browser-default):disabled, input[type=datetime]:not(.browser-default)[readonly="readonly"], input[type=datetime-local]:not(.browser-default):disabled, input[type=datetime-local]:not(.browser-default)[readonly="readonly"], input[type=tel]:not(.browser-default):disabled, input[type=tel]:not(.browser-default)[readonly="readonly"], input[type=number]:not(.browser-default):disabled, input[type=number]:not(.browser-default)[readonly="readonly"], input[type=search]:not(.browser-default):disabled, input[type=search]:not(.browser-default)[readonly="readonly"], textarea.materialize-textarea:disabled, textarea.materialize-textarea[readonly="readonly"]{
	color: rgb(2, 164, 158)
}
</style>
