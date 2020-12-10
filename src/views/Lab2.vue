<template>
	<div class="container">
		<h2>Отделение и уточнение корней уравнения методом половинного деления</h2>
		<p>Составить программу для решения системы линейных уравнений методами итераций</p>
		<div class="row">
			<div class="input-field col s3">
				<input v-model="input1_x1" id="input1-x1" type="text" class="validate">
				<label for="input1-x1">x1</label>
			</div>
			<div class="input-field col s3">
				<input v-model="input1_x2" id="input1-x1" type="text" class="validate">
				<label for="input1-x1">x2</label>
			</div>
			<div class="input-field col s3">
				<input v-model="input1_x3" id="input1-x3" type="text" class="validate">
				<label for="input1-x3">x3</label>
			</div>
			<div class="input-field col s3">
				<input v-model="cons1" type="text" class="validate">
			</div>
		</div>
		<div class="row">
			<div class="input-field col s3">
				<input v-model="input2_x1" id="input2-x1" type="text" class="validate">
				<label for="input2-x1">x1</label>
			</div>
			<div class="input-field col s3">
				<input v-model="input2_x2" id="input2-x2" type="text" class="validate">
				<label for="input2-x2">x2</label>
			</div>
			<div class="input-field col s3">
				<input v-model="input2_x3" id="input2-x3" type="text" class="validate">
				<label for="input2-x3">x3</label>
			</div>
			<div class="input-field col s3">
				<input v-model="cons2" type="text" class="validate">
			</div>
		</div>
		<div class="row">
			<div class="input-field col s3">
				<input v-model="input3_x1" id="input3-x1" type="text" class="validate">
				<label for="input3-x1">x1</label>
			</div>
			<div class="input-field col s3">
				<input v-model="input3_x2" id="input3-x2" type="text" class="validate">
				<label for="input3-x2">x2</label>
			</div>
			<div class="input-field col s3">
				<input v-model="input3_x3" id="input3-x3" type="text" class="validate">
				<label for="input3-x3">x3</label>
			</div>
			<div class="input-field col s3">
				<input v-model="cons3" type="text" class="validate">
			</div>
		</div>
		<div class="row">
			<div class="input-field col s3">
				<input v-model="accuracy" id="accuracy" type="text" class="validate">
				<label for="accuracy">Точность</label>
			</div>
			<div class="input-field col offset-s6 s3">
				<button class="btn">Определить</button>
			</div>
		</div>
		<div class="row">
			<h3>Итог:</h3>
			<div class="input-field col s6">
				<h4>Метод Якоби</h4>
			</div>
			<div class="input-field col s6">
				<h4>Метод Зейделя</h4>
			</div>
			<div class="input-field col s6">
				<input disabled id="iter1" type="text" class="validate">
				<label for="iter1" class="active">Количество итераций</label>
			</div>
			<div class="input-field col s6">
				<input disabled id="iter2" type="text" class="validate">
				<label for="iter2" class="active">Количество итераций</label>
			</div>
			<div class="input-field col s6">
				<input disabled id="x1-1" type="text" class="validate">
				<label for="x1-1" class="active">X1</label>
			</div>
			<div class="input-field col s6">
				<input disabled id="x1-2" type="text" class="validate">
				<label for="x1-2" class="active">X1</label>
			</div>
			<div class="input-field col s6">
				<input disabled id="x2-1" type="text" class="validate">
				<label for="x2-1" class="active">X2</label>
			</div>
			<div class="input-field col s6">
				<input disabled id="x2-2" type="text" class="validate">
				<label for="x2-2" class="active">X2</label>
			</div>
			<div class="input-field col s6">
				<input disabled id="x3-1" type="text" class="validate">
				<label for="x3-1" class="active">X3</label>
			</div>
			<div class="input-field col s6">
				<input disabled id="x3-2" type="text" class="validate">
				<label for="x3-2" class="active">X3</label>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			input1_x1: '123123',
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
			accuracy: ''
		}
	},
	mounted() {
		
	},
	methods: {
		diagonal(arr, cons) {
			const ind = [];
			const temp = [];
			const maxind = [];
			for (let i = 0; i < 3; i++) {
				if (arr[0, i] > arr[0, ind[0]]) { 
					ind[0] = i; maxind[0] = arr[0, i];
				}
				if (arr[1, i] > arr[1, ind[1]]) { 
					ind[1] = i; maxind[1] = arr[1, i];
				}
				if (arr[2, i] > arr[2, ind[2]]) {
					ind[2] = i; maxind[2] = arr[2, i];
				}
			}
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					if (ind[i] == j && i != j && arr[i,j] > arr[j,j]) {
						for (let st = 0; st < 3; st++) {
							temp[st] = arr[j, st];
							arr[j, st] = arr[i, st];
							arr[i, st] = temp[st];
							temp[st] = cons[j];
							cons[j] = cons[i];
							cons[i] = temp[st];
						}
					}
				}
			}
			console.log(ind, temp, maxind)
		}
	},

	check(Tempiter, iter, accuracy) {
		const e = [];
		for (let i = 0; i < 3; i++) {
			e[i] = Math.abs(Tempiter[i] - iter[i]);
		}
		let eMax = Math.max(...e);
		if (eMax > accuracy) {
			return true;
		}
		return false;
	},

	search_click(sender, e) {
		const arr = [];
		const cons = [];
		const iter = [];
		const Tempiter = [];
		let iteration = 0;
		arr[0, 0] = this.input1_x1;
		arr[0, 1] = this.input1_x2;
		arr[0, 2] = this.input1_x3;
		arr[1, 0] = this.input2_x1;
		arr[1, 1] = this.input2_x2;
		arr[1, 2] = this.input2_x3;
		arr[2, 0] = this.input3_x1;
		arr[2, 1] = this.input3_x2;
		arr[2, 2] = this.input3_x3;
		cons[0] = this.cons1;
		cons[1] = this.cons2;
		cons[2] = this.cons3;
		for (let i = 0; i < 3; i++) {
			Tempiter[i] = 0;
		}
			
		let accuracy = this.accuracy;

		this.diagonal(arr, cons);
		
		do {
			for (let i = 0; i < 3; i++) {
				iter[i] = Tempiter[i];
			}
			Tempiter[0] = -arr[0, 1] * iter[1] + (-arr[0, 2]) * iter[2] + cons[0];
			Tempiter[1] = -arr[1, 0] * iter[0] + (-arr[1, 2]) * iter[2] + cons[1];
			Tempiter[2] = -arr[2, 0] * iter[0] + (-arr[2, 1]) * iter[1] + cons[2];
			iteration++;
		} while (this.check(Tempiter, iter, accuracy));

		JacobiX1.Text = Math.round(Tempiter[0], 3).ToString();
		JacobiX2.Text = Math.round(Tempiter[1], 3).ToString();
		JacobiX3.Text = Math.round(Tempiter[2], 3).ToString();
		iterationBox1.Text = iteration.ToString();


		for (let i = 0; i < 3; i++){
			Tempiter[i] = 0;
		}
		iteration = 0;
		do {
			for (let i = 0; i < 3; i++) {
				iter[i] = Tempiter[i];
			}
			Tempiter[0] = -arr[0, 1] * Tempiter[1] + (-arr[0, 2]) * Tempiter[2] + cons[0];
			Tempiter[1] = -arr[1, 0] * Tempiter[0] + (-arr[1, 2]) * Tempiter[2] + cons[1];
			Tempiter[2] = -arr[2, 0] * Tempiter[0] + (-arr[2, 1]) * Tempiter[1] + cons[2];
			iteration++;
		} while (this.check(Tempiter, iter, accuracy)) ;

		SeidelX1.Text = Math.Round(Tempiter[0], 3).ToString();
		SeidelX2.Text = Math.Round(Tempiter[1], 3).ToString();
		SeidelX3.Text = Math.Round(Tempiter[2], 3).ToString();
		iterationBox2.Text = iteration.ToString();
	}
}
</script>

<style lang="scss" scoped>

</style>
