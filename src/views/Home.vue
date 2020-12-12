<template>
	<div class="home">
		<h1>Лабы по вычислительным методам</h1>
		<div class="collection">
			<router-link  class="collection-item" to="/lab1">Лабораторная работа 1 - Вычисление погрешностей</router-link>
			<router-link  class="collection-item" to="/lab2">Лабораторная работа 2 - Решение систем линейных уравнений методами итераций</router-link>
			<router-link  class="collection-item" to="/lab3">Лабораторная работа 3 - Решение систем линейных уравнений методом Гаусса</router-link>
			<router-link  class="collection-item" to="/lab4">Лабораторная работа 4 - Отделение и уточнение корней уравнения методом половинного деления</router-link>
			<router-link  class="collection-item" to="/lab5">Лабораторная работа 5 - Решение нелинейных уравнений</router-link>
			<router-link  class="collection-item" to="/lab6">Лабораторная работа 6 - Составление интерполяционных формул Лагранжа</router-link>
			<router-link  class="collection-item" to="/lab7">Лабораторная работа 7 - Составление интерполяционных формул Ньютона</router-link>
			<router-link  class="collection-item" to="/lab7">Лабораторная работа 8 - Решение нелинейных уравнений</router-link>
			<router-link  class="collection-item" to="/lab7">Лабораторная работа 9 - Приближение функций</router-link>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Home',
}
</script>
