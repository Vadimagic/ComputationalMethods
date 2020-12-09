<template>
	<div class="container">
		<h2>Hello</h2>
		<div class="forms">
			<form action="#" class="form division">
				<div class="equel">
					<div class="equality">
						<input type="text" class="numerator" onkeyup="this.value = this.value.replace(/[^\d]/g,'');">
						<div class="line"></div>
						<input type="text" class="denominator" onkeyup="this.value = this.value.replace(/[^\d]/g,'');">
					</div>
					<div class="equally"> 
						<span>
							= 
						</span>
						<input type="text" class="answer_1">
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
						<input type="text" class="square" onkeyup="this.value = this.value.replace(/[^\d]/g,'');">
					</div>
					<div class="equally"> 
						<span>
							= 
						</span>
						<input type="text" class="answer_2">
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
		<button class="fault">Найти</button>
	</div>
</template>

<script>
export default {
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

				console.log(reply[0])
		
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
	}
}
</script>

<style lang="scss">

.forms {
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 30px;
}

input {
	border: 2px dashed black;
	width: 150px;
	margin-bottom: 7px;
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

.square {
	padding-left: 15px;
}

#answer {
	display: none;
	font-size: 20px;
	display: inline-block;
	position: relative;
	left: 50%;
	transform: translate(-50%, 0);
}
</style>
