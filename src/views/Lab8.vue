<template>
	<div class="container" style="width: 100%">
		<h2>Решение нелинейных уравнений</h2>
		<p>Изучение итерационных методов решения нелинейных уравнений.</p>
		<div class="row">
			<h4 class="center-align">Разностный метод Ньютона с постоянным шагом</h4>
			<div class="input-field col offset-s4 s4">
				<button @click="button1_click" class="btn" style="width: 100%">Решение</button>
			</div>
			<div class="col s6">
				<table>
					<thead>
						<tr>
							<th>n</th>
							<th>Xn</th>
							<th>f(Xn)</th>
							<th>|Xn - Xn - 1|</th>
						</tr>
						<tr v-for="(td, index) of newton_1" :key="index">
							<td>{{index + 1}}</td>
							<td>{{td.xn}}</td>
							<td>{{td.f}}</td>
							<td>{{td.eps}}</td>
						</tr>
					</thead>
				</table>
			</div>
			<div class="col s6">
				<table>
					<thead>
						<tr>
							<th>n</th>
							<th>Xn</th>
							<th>f(Xn)</th>
							<th>|Xn - Xn - 1|</th>
						</tr>
						<tr v-for="(td, index) of newton_2" :key="index">
							<td>{{index + 1}}</td>
							<td>{{td.xn}}</td>
							<td>{{td.f}}</td>
							<td>{{td.eps}}</td>
						</tr>
					</thead>
				</table>
			</div>
		</div>
		<div class="row">
			<h4 class="center-align">Метод Стеффенсона</h4>
			<div class="input-field col offset-s4 s4">
				<button @click="button2_click" class="btn" style="width: 100%">Решение</button>
			</div>
			<div class="col s6">
				<table>
					<thead>
						<tr>
							<th>n</th>
							<th>Xn</th>
							<th>f(Xn)</th>
							<th>|Xn - Xn - 1|</th>
						</tr>
						<tr>
							<!-- v-for="(td, index) of table" :key="index" -->
							<td>{1}</td>
							<td>{2}</td>
							<td>{3}</td>
							<td>{4}</td>
						</tr>
					</thead>
				</table>
			</div>
			<div class="col s6">
				<table>
					<thead>
						<tr>
							<th>n</th>
							<th>Xn</th>
							<th>f(Xn)</th>
							<th>|Xn - Xn - 1|</th>
						</tr>
						<tr>
							<!-- v-for="(td, index) of table" :key="index" -->
							<td>{1}</td>
							<td>{2}</td>
							<td>{3}</td>
							<td>{4}</td>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newton_1: [],
			newton_2: [],
		}
	},
	methods: {
		addNewton_1(xn, f, eps) {
			this.newton_1.push({
				xn: xn,
				f: f,
				eps: eps
			})
		},
		addNewton_2(xn, f, eps) {
			this.newton_2.push({
				xn: xn,
				f: f,
				eps: eps
			})
		},
		button2_click() {
			
		},
		button1_click() {
			this.newton_1 = []
			this.newton_2 = []
			let f1, f2, x1, eps, x0 = 4.35, h = 0.001, stringF, stringEps;
			f1 = 3 - Math.sqrt(x0) - 0.5 * Math.log(x0);
			f2 = 3 - Math.sqrt(x0 + h) - 0.5 * Math.log(x0 + h);
			this.addNewton_1(x0, f1.toString(), "-");
			do {
				x1 = x0 - (f1 * h) / (f2 - f1);
				x0 = x1;
				f1 = 3 - Math.sqrt(x0) - 0.5 * Math.log(x0);
				f2 = 3 - Math.sqrt(x0 + h) - 0.5 * Math.log(x0 + h);
				x1 = x0 - (f1 * h) / (f2 - f1);
				eps = Math.abs(x1 - x0);
				stringF = String(f1);
				stringEps = String(eps);
				this.addNewton_1(x0, stringF, stringEps);
			} while (Math.abs(x1 - x0) > 0.0000001);

			x0 = 0.55;
			f1 = Math.pow(Math.cos(x0), 2) - 0.8 * Math.pow(x0, 2);
			f2 = Math.pow(Math.cos(x0 + h), 2) - 0.8 * Math.pow(x0 + h, 2);
			this.addNewton_2(x0, f1.toString(), "-");
			do {
				x1 = x0 - (f1 * h) / (f2 - f1);
				x0 = x1;
				f1 = Math.pow(Math.cos(x0), 2) - 0.8 * Math.pow(x0, 2);
				f2 = Math.pow(Math.cos(x0 + h), 2) - 0.8 * Math.pow(x0 + h, 2);
				x1 = x0 - (f1 * h) / (f2 - f1);
				eps = Math.abs(x1 - x0);
				this.addNewton_2(x0, stringF, stringEps);
			} while (Math.abs(x1 - x0) > 0.0000001);
		}
	}
}
</script>

<style>
	@media only screen and (min-width: 993px) {
		.container {
			width: 90%;
		}
	}
</style>