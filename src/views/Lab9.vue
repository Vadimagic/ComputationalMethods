<template>
	<div class="container">
		<h2>Градиентные методы</h2>
		<p></p>
		<div class="row">
			<div class="input-field col offset-s4 s4">
				<button @click="button1_click" class="btn" style="width: 100%">Сделать задание</button>
			</div>
		</div>
		<canvas id="myChart"></canvas>
	</div>
</template>

<script>
export default {
	mounted() {
		let ctx = document.getElementById('myChart').getContext('2d');
		let myLineChart = new Chart(ctx, {
			type: 'line',
			data: [{
				x: 10,
				y: 20
			}, {
				x: 15,
				y: 10
			}],
			options: {
				scales: {
					yAxes: [{
						stacked: true
					}]
				}
			}
		});
	}
}
</script>