<template>
	<div class="container">
		<h2>Решение нелинейных уравнений</h2>
		<p>Изучение итерационных методов решения нелинейных уравнений.</p>
		<div class="row">
			<div class="input-field col offset-s4 s4">
				<button @click="button1_click" class="btn" style="width: 100%">Сделать задание 1</button>
			</div>
		</div>
		<div class="row">
			<h4 class="center-align col s12">Метод с дроблением шага</h4>
			<div class="input-field col s12">
				<textarea v-model="text" id="textarea1" class="materialize-textarea" style="height: 150px; background: #f4f4f4;" disabled></textarea>
			</div>
			<h4 class="center-align col s12">Метод наискорейшего спуска</h4>
			<div class="input-field col s12">
				<textarea v-model="text" id="textarea1" class="materialize-textarea" style="height: 150px; background: #f4f4f4;" disabled></textarea>
			</div>
		</div>
	</div>
</template>