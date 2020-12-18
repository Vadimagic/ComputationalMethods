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
				<pre style="background: #f4f4f4; padding: 15px; border-radius: 15px">{{text1}}</pre>
			</div>
			<h4 class="center-align col s12">Метод наискорейшего спуска</h4>
			<div class="input-field col s12">
				<pre style="background: #f4f4f4; padding: 15px; border-radius: 15px">{{text2}}</pre>
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
	methods: {
		f(x, y) { return x * x + 2 * y * y - 2 * x + y - 5},
		pr_dx(x) { return 2 * x - 2},
		pr_dy(y) { return 4 * y + 1},
		g(x, y, alpha) { return this.f(x - alpha * this.pr_dx(x), y - alpha * this.pr_dy(y))},
		norm(x, y) { return Math.sqrt(x * x + y * y)},
		findStep(start, end, eps, x, y) {
			let k = 1, left, right, min, delta = 0.5 * eps;
			do {
				left = (start + end - delta) / 2;
				right = (start + end + delta) / 2;
				k++;
				if (this.g(x, y, left) <= this.g(x, y, right)) {
					end = right;
				}
				else {
					start = left;
				}
			} while ((end - start) >= eps);
			min = (start + end) / 2;
			return min;
		},
		split_step_method() {
			let tempX1, tempX2, dx1, dx2, Y, x1 = 0, x2 = 2, eps = 0.4, alpha = 1, iterationMax = 100, k = 0;
			do {
				tempX1 = x1;
				tempX2 = x2;
				dx1 = 2 * x1 - 2;
				dx2 = 4 * x2 + 1;
				x1 = x1 - alpha * dx1;
				x2 = x2 - alpha * dx2;
				Y = x1 * x1 + 2 * x2 * x2 - 2 * x1 + x2 - 5; ;
				k++;
				alpha = alpha / 2;
				this.text1 += "Итерация №" + k + ":\n\nx1 = " + x1 + "; \nx2 = " + x2 + "; \ndx1 = " + dx1 + "; \ndx2 = " + dx2 + "; \nF(x1,x2) = " + Y + "\n\n";
				if (k > iterationMax) break;
			} while ((Math.abs(x1 - tempX1) >= eps) && (Math.abs(x2 - tempX2) > eps));
			this.text1 += "Ответ:\nx* = (" + x1 + "; " + x2 + "); \nF(x1*,x2*) = " + Y;
		},
		steepest_descent_method() {
			let eps = 0.4, k = 0,
				x = [],
				y = [],
				step = [];
			x[0] = 0;
			y[0] = 2;
			while (true) {
				step[k] = this.findStep(-10000, 100000, eps, x[k], y[k]);
				x[k + 1] = x[k] - step[k] * this.pr_dx(x[k]);
				y[k + 1] = y[k] - step[k] * this.pr_dy(y[k]);
				this.text2 += "Итерация №" + (k + 1) + ":\n\nx1 = " + x[k + 1] + "; \nx2 = " + y[k + 1] + "; \ndx1 = " + this.pr_dx(x[k + 1]) + "; \ndx2 = " + this.pr_dy(y[k + 1]) + "; \nF(x1,x2) = " + this.f(x[k + 1], y[k + 1]) + "\n\n";
				if (k > 1) {
					if (this.norm(x[k + 1] - x[k], y[k + 1] - y[k]) < eps) {
						break;
					}
				}
				k++;
			}
			this.text2 += "Ответ: \nx* = (" + x[k + 1] + "; " + y[k + 1] + "); \nF(x1*,x2*) = " + this.f(x[k + 1], y[k + 1]);
		},
		button1_click() {
			this.text1 = '';
			this.text2 = '';
			this.split_step_method();
			this.steepest_descent_method();
		}
	}
}
</script>