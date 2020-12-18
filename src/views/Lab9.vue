<template>
	<div class="container">
		<h2>Приближение функций</h2>
		<p>Получение навыков самостоятельной алгоритмической и программной реализации на компьютерной технике методов приближения функций.</p>
		<canvas id="myChart"></canvas>
	</div>
</template>

<script>
export default {
	data() {
		return {
			datasets: []
		}
	},
	mounted() {
		let x = [-5.5, -4.1, -2.7, -1.3, 0.1, 1.5, 2.9, 4.3, 5.7, 7.1, 8.5], 
			 y = [-7, 37, 365, 397, -100, 395, 338, -112, -1020, 196, 1301];
		const datasets = [{
			label: 'Исходные данные',
			fill: false,
			backgroundColor: window.chartColors.red,
			borderColor: window.chartColors.red,
			lineTension: 0,
			data: x.map((x, i) => {
				return {x: x, y: y[i]}
			})
		}]
		let N = x.length, Pi, L = [], Newt = [], X =6.14
		for (let i = 0; i < N; i++) {
			Pi = 1
			for (let j = 0; j < N; j++) {
				if (j == i) {
					continue;
				}
				Pi *= (X - x[j]) / (x[i] - x[j])
			}
			L.push(y[i] * Pi)
		}
		datasets.push({
			label: 'Полином Лагранжа',
			fill: false,
			backgroundColor: window.chartColors.blue,
			borderColor: window.chartColors.blue,
			data: x.map((x, i) => {
				return {x: x, y: L[i]}
			})
		})
		let yClone = [...y]
		let LN = []
		for (let i = 0; i < N; i++) {
			Pi = 1
			for (let j = 0; j < N; j++) {
				if (j == i) {
					continue;
				}
				Pi *= (X - x[j]) / (x[i] - x[j])
			}
			LN.push(y[i] * Pi)
		}
		datasets.push({
			label: 'Полином Ньютона',
			fill: false,
			backgroundColor: window.chartColors.purple,
			borderColor: window.chartColors.purple,
			data: x.map((x, i) => {
				return {x: x, y: LN[i]}
			})
		})
		datasets.push({
			label: 'Сплайн',
			fill: false,
			backgroundColor: window.chartColors.orange,
			borderColor: window.chartColors.orange,
			data: x.map((x, i) => {
				return {x: x, y: y[i]}
			})
		})
		this.ctx = document.getElementById('myChart').getContext('2d');
		let myLineChart = new Chart(this.ctx, {
			type: 'line',
			data: {
				datasets: datasets
			},
			options: {
				scales: {
					xAxes: [{
						type: 'linear',
						position: 'bottom'
					}],
				}
			}
		})
	}
}
</script>