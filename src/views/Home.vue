<template>
	<div class="home">
		<h1>Лабы по вычислительным методам</h1>
		<div class="collection">
			<router-link  class="collection-item" to="/lab1">Лабораторная работа 1 - Вычисление погрешностей</router-link>
			<router-link  class="collection-item" to="/lab2">Лабораторная работа 2 - Отделение и уточнение корней уравнения методом половинного деления</router-link>
			<router-link  class="collection-item" to="/lab3">Лабораторная работа 3 - Решение систем линейных уравнений методом Гаусса</router-link>
			<router-link  class="collection-item" to="/lab4">Лабораторная работа 4 - Отделение и уточнение корней уравнения методом половинного деления</router-link>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Home',
}
</script>
