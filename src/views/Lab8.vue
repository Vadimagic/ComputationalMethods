<template>
	<div class="container">
		<h2>Решение нелинейных уравнений</h2>
		<p>Изучение итерационных методов решения нелинейных уравнений.</p>
		<div class="row">
			<h4 class="center-align">Разностный метод Ньютона с постоянным шагом</h4>
			<div class="input-field col offset-s4 s4">
				<button @click="button2_click" class="btn" style="width: 100%">Решение</button>
			</div>
			<div class="col s5">
				<table>
					<thead>
						<tr>
							<th>n</th>
							<th>Xn</th>
							<th>Xn + 1</th>
							<th>|Xn + 1 - Xn|</th>
							<th>|f(Xn + 1)|</th>
						</tr>
						<tr>
							<!-- v-for="(td, index) of table" :key="index" -->
							<td>{1}</td>
							<td>{2}</td>
							<td>{3}</td>
							<td>{4}</td>
							<td>{5}</td>
						</tr>
					</thead>
				</table>
			</div>
			<div class="col offset-s2 s5">
				<table>
					<thead>
						<tr>
							<th>n</th>
							<th>Xn</th>
							<th>Xn + 1</th>
							<th>|Xn + 1 - Xn|</th>
							<th>|f(Xn + 1)|</th>
						</tr>
						<tr>
							<!-- v-for="(td, index) of table" :key="index" -->
							<td>{1}</td>
							<td>{2}</td>
							<td>{3}</td>
							<td>{4}</td>
							<td>{5}</td>
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
			<div class="col s5">
				<table>
					<thead>
						<tr>
							<th>n</th>
							<th>Xn</th>
							<th>Xn + 1</th>
							<th>|Xn + 1 - Xn|</th>
							<th>|f(Xn + 1)|</th>
						</tr>
						<tr>
							<!-- v-for="(td, index) of table" :key="index" -->
							<td>{1}</td>
							<td>{2}</td>
							<td>{3}</td>
							<td>{4}</td>
							<td>{5}</td>
						</tr>
					</thead>
				</table>
			</div>
			<div class="col offset-s2 s5">
				<table>
					<thead>
						<tr>
							<th>n</th>
							<th>Xn</th>
							<th>Xn + 1</th>
							<th>|Xn + 1 - Xn|</th>
							<th>|f(Xn + 1)|</th>
						</tr>
						<tr>
							<!-- v-for="(td, index) of table" :key="index" -->
							<td>{1}</td>
							<td>{2}</td>
							<td>{3}</td>
							<td>{4}</td>
							<td>{5}</td>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>
</template>