<template>
	<div class="container">
		<h2>Вычисление погрешностей</h2>
		<p>Составить программу для определения абсолютных, относительных и предельных относительных погрешностей приведенных равенств. Определить какое равенство точнее.</p>
		<div class="forms">
			<form action="#" class="form division">
				<div class="equel">
					<div class="equality">
						<input v-model="numerator" type="text" class="numerator" onkeyup="this.value = this.value.replace(/[^\d]/g,'');">
						<div class="line"></div>
						<input v-model="denominator" type="text" class="denominator" onkeyup="this.value = this.value.replace(/[^\d]/g,'');">
					</div>
					<div class="equally"> 
						<span>
							= 
						</span>
						<input v-model="answer_1" type="text" class="answer_1">
					</div>
				</div>
				<div class="reply replyDivision">
					<ul>
						<li>Абсолютная погрешность: <span class="absFault"></span>%</li>
						<li>Относительная погрешность: <span class="relFault"></span>%</li>
						<li>Предельная относительная погрешность: <span class="limFault"></span>%</li>
					</ul>
				</div>
			</form>
			<form action="#" class="form root">
				<div class="equel">
					<div class="expression">
						<input v-model="square" type="text" class="square" onkeyup="this.value = this.value.replace(/[^\d]/g,'');">
					</div>
					<div class="equally"> 
						<span>
							= 
						</span>
						<input v-model="answer_2" type="text" class="answer_2">
					</div>
				</div>
				<div class="reply replyRoot">
					<ul>
						<li>Абсолютная погрешность: <span class="absFault"></span>%</li>
						<li>Относительная погрешность: <span class="relFault"></span>%</li>
						<li>Предельная относительная погрешность: <span class="limFault"></span>%</li>
					</ul>
				</div>
			</form>
		</div>
		<span id="answer"></span>
		<div class="row">
			<div class="input-field col offset-s3 s2">
				<button @click="fillForm" class="btn">Заполнить</button>
			</div>
			<div class="input-field col offset-s1 s2">
				<button class="fault btn">Найти</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			numerator: '',
			denominator: '',
			square: '',
			answer_1: '',
			answer_2: ''
		}
	},
	mounted() {
		const fault = document.getElementsByClassName("fault")[0],
				divAbs = document.getElementsByClassName("replyDivision")[0].getElementsByClassName("absFault")[0],
				divRel = document.getElementsByClassName("replyDivision")[0].getElementsByClassName("relFault")[0],
				divLim = document.getElementsByClassName("replyDivision")[0].getElementsByClassName("limFault")[0],
				rootAbs = document.getElementsByClassName("replyRoot")[0].getElementsByClassName("absFault")[0],
				rootRel = document.getElementsByClassName("replyRoot")[0].getElementsByClassName("relFault")[0],
				rootLim = document.getElementsByClassName("replyRoot")[0].getElementsByClassName("limFault")[0],
				answer = document.getElementById("answer"),
				reply = document.getElementsByClassName("reply");
		
		fault.addEventListener('click', () => {
			const numerator = document.getElementsByClassName("numerator")[0].value,
					denominator = document.getElementsByClassName("denominator")[0].value,
					square = document.getElementsByClassName("square")[0].value,
					answer1 = document.getElementsByClassName("answer_1")[0].value,
					answer2 = document.getElementsByClassName("answer_2")[0].value;
			
			if (numerator && denominator && square && answer1 && answer2) {
				const a1 = numerator / denominator;
				const a2 = Math.sqrt(square);
				console.log(`${a1} a1  : ${a2} a2`)

				divAbs.textContent = Math.abs(a1 - answer1)
				divRel.textContent = +divAbs.textContent / a1 * 100
				divLim.textContent = +divAbs.textContent / +answer1 * 100

				rootAbs.textContent = Math.abs(a2 - answer2)
				rootRel.textContent = +rootAbs.textContent / a2 * 100 
				rootLim.textContent = +rootAbs.textContent / +answer2 * 100 

				if (+divLim.textContent < +rootLim.textContent) {
					answer.textContent = "Первое число определенно более точно"
				} else {
					answer.textContent = "Второе число определенно более точно"
				}

				const array = Array.from(reply)
				array.forEach(element => {
					element.style.display = "block"
				});

				answer.style.display = "inline-block"
			} else {
				alert("Заполните формы!")
			}
		})
	},
	methods: {
		fillForm() {
			this.numerator = '24';
			this.denominator = '27';
			this.square = '14';
			this.answer_1 = '0.889',
			this.answer_2 = '3.74'
		},
	}
}
</script>

<style lang="scss" scoped>
	h2 {
		margin-top: 10px;
	}
	.container {
		margin-top: 20px;
		padding: 20px;
	}

	.forms {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-bottom: 30px;
	}

	button {
		display: block;
	}

	.reply {
		display: none;
	}

	.equel {
		display: flex;
		align-items: center;
	}

	.equality {
		display: inline-block;
		margin-right: 5px;
	}

	.equally {
	display: inline-block;
	}

	.expression {
		margin-right: 5px;
	}

	.fault {
		display: block;
		margin: 0 auto;
	}

	#answer {
		display: none;
		font-size: 20px;
		display: inline-block;
		position: relative;
		left: 50%;
		transform: translate(-50%, 0);
	}


	input:not([type]), input[type=text]:not(.browser-default){
		background-color: transparent;
		border: 2px dashed black;
		border-bottom: 2px dashed black;
		outline: none;
		height: 100%;
		width: 120px;
		font-size: 16px;
		margin: 0 0 8px 0;
		padding: 0;
		box-shadow: none;
		box-sizing: content-box;
		transition: box-shadow .3s, border .3s;
	}

	input[type=text]:not(.browser-default):hover,
	input[type=text]:not(.browser-default):focus,
	input[type=text]:not(.browser-default):active {
		border-bottom: 2px dashed black;
	}

	input[type=text]:not(.browser-default).square {
		padding-left: 15px;
		background: url('../assets/img/square.png') 0 0/contain no-repeat;
	}
</style>
