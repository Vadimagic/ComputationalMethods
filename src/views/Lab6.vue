<template>
	<div class="container">
		<h2>Составление интерполяционных формул Лагранжа</h2>
		<p>Формирование навыков нахождения приближённого значения функции при данном значении аргумента с помощью интерполяционного многочлена Лагранжа.</p>
		<div class="row">
			<div class="input-field col offset-s3 s3">
				<input v-model="x1" id="x1" type="text" class="validate">
				<label for="x1" class="active">X1</label>
			</div>
			<div class="input-field col s3">
				<input v-model="y1" id="y1" type="text" class="validate">
				<label for="y1" class="active">Y1</label>
			</div>
			<div class="input-field col offset-s3 s3">
				<input v-model="x2" id="x2" type="text" class="validate">
				<label for="x2" class="active">X2</label>
			</div>
			<div class="input-field col s3">
				<input v-model="y2" id="y2" type="text" class="validate">
				<label for="y2" class="active">Y2</label>
			</div>
			<div class="input-field col offset-s3 s3">
				<input v-model="x3" id="x3" type="text" class="validate">
				<label for="x3" class="active">X3</label>
			</div>
			<div class="input-field col s3">
				<input v-model="y3" id="y3" type="text" class="validate">
				<label for="y3" class="active">Y3</label>
			</div>
			<div class="input-field col offset-s3 s3">
				<input v-model="x4" id="x4" type="text" class="validate">
				<label for="x4" class="active">X4</label>
			</div>
			<div class="input-field col s3">
				<input v-model="y4" id="y4" type="text" class="validate">
				<label for="y4" class="active">Y4</label>
			</div>
			<div class="input-field col offset-s3 s3">
				<input v-model="x5" id="x5" type="text" class="validate">
				<label for="x5" class="active">X5</label>
			</div>
			<div class="input-field col s3">
				<input v-model="y5" id="y5" type="text" class="validate">
				<label for="y5" class="active">Y5</label>
			</div>
			<div class="input-field col offset-s3 s3">
				<input v-model="x6" id="x6" type="text" class="validate">
				<label for="x6" class="active">X6</label>
			</div>
			<div class="input-field col s3">
				<input v-model="y6" id="y6" type="text" class="validate">
				<label for="y6" class="active">Y6</label>
			</div>
			<div class="input-field col offset-s5 s2">
				<input v-model="x" id="x" type="text" class="validate">
				<label for="x" class="active">X</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col offset-s7 s2">
				<button @click="fillForm" class="btn">Заполнить</button>
			</div>
			<div class="input-field col offset-s1 s2">
				<button @click="search_click" class="btn" :disabled="!Boolean(x && x1 && x2 && x3 && x4 && x5 && x6 && y1 && y2 && y3 && y4 && y5 && y6)">Определить</button>
			</div>
		</div>
		<div class="row" v-if="l">
			<div class="input-field col offset-s4 s4">
				<input v-model="l" id="l" type="text" class="validate">
				<label for="l" class="active">L</label>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			x: '',
			x1: '',
			x2: '',
			x3: '',
			x4: '',
			x5: '',
			x6: '',
			y1: '',
			y2: '',
			y3: '',
			y4: '',
			y5: '',
			y6: '',
			l: ''
		}
	},
	methods: {
		fillForm() {
			this.x = 0.314
			this.x1 = 0.11
			this.x2 = 0.15
			this.x3 = 0.21
			this.x4 = 0.29
			this.x5 = 0.35
			this.x6 = 0.40
			this.y1 = 9.05421
			this.y2 = 6.61659
			this.y3 = 4.69170
			this.y4 = 3.35106
			this.y5 = 2.73951
			this.y6 = 2.36522
		},
		search_click() {
			let multiplication, sum = 0, x = this.x;
			const arrX = [], arrY = [];
			arrX[0] = this.x1;
			arrX[1] = this.x2;
			arrX[2] = this.x3;
			arrX[3] = this.x4;
			arrX[4] = this.x5;
			arrX[5] = this.x6;
			arrY[0] = this.y1;
			arrY[1] = this.y2;
			arrY[2] = this.y3;
			arrY[3] = this.y4;
			arrY[4] = this.y5;
			arrY[5] = this.y6;

			for (let i = 0; i < 6; i++) {
				multiplication = 1;
				for (let j = 0; j < 6; j++) {
					if (j != i){
						multiplication *= (x - arrX[j]) / (arrX[i] - arrX[j]);
					}
				}
				sum += multiplication * arrY[i];
			}
			this.l = sum.toString();
		}
	}
}
</script>

<style lang="scss" scoped>
input:not([type]):disabled, input:not([type])[readonly="readonly"], input[type=text]:not(.browser-default):disabled, input[type=text]:not(.browser-default)[readonly="readonly"], input[type=password]:not(.browser-default):disabled, input[type=password]:not(.browser-default)[readonly="readonly"], input[type=email]:not(.browser-default):disabled, input[type=email]:not(.browser-default)[readonly="readonly"], input[type=url]:not(.browser-default):disabled, input[type=url]:not(.browser-default)[readonly="readonly"], input[type=time]:not(.browser-default):disabled, input[type=time]:not(.browser-default)[readonly="readonly"], input[type=date]:not(.browser-default):disabled, input[type=date]:not(.browser-default)[readonly="readonly"], input[type=datetime]:not(.browser-default):disabled, input[type=datetime]:not(.browser-default)[readonly="readonly"], input[type=datetime-local]:not(.browser-default):disabled, input[type=datetime-local]:not(.browser-default)[readonly="readonly"], input[type=tel]:not(.browser-default):disabled, input[type=tel]:not(.browser-default)[readonly="readonly"], input[type=number]:not(.browser-default):disabled, input[type=number]:not(.browser-default)[readonly="readonly"], input[type=search]:not(.browser-default):disabled, input[type=search]:not(.browser-default)[readonly="readonly"], textarea.materialize-textarea:disabled, textarea.materialize-textarea[readonly="readonly"]{
	color: rgb(2, 164, 158)
}
</style>
