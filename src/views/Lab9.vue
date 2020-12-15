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
			// lineTension: 0,
			data: [
				{x:-5.5,y:-7}, 
				{x: -4.1,y: 37}, 
				{x: -2.7,y: 365},
				{x: -1.3,y: 397},
				{x: 0.1,y: -100},
				{x: 1.5,y: 395},
				{x: 2.9,y: 338},
				{x: 4.3,y: -112},
				{x: 5.7,y: -1020},
				{x: 7.1,y: 196},
				{x: 8.5,y: 1301},
			]
		}]

		let N = x.length, Pi, L = [], X = 0.34

		for (let i = 0; i < N; i++) {
			Pi = 1;
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
					yAxes: [{
						stacked: true
					}]
				}
			}
		})
	},
	methods: {
	}
}
</script>