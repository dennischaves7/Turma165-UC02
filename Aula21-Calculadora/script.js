let display = document.getElementById("display")
let calculo = document.getElementById("calculo")
let number1 = ""
let number2 = ""
let operator = ""
let mostrar = false

function addValue(value) {
     
  if (mostrar) {
   clearAll()
     mostrar = false
  }

  if (operator === "") {
    number1 += value
  } else {
    number2 += value
  }
  display.innerText = number1 + " " + operator + " " + number2
}

function addOperator(op) {
  if (number1 !== "" && operator === "") {
    operator = op
    display.innerText = number1 + " " + operator
  }
}

function clearAll() {
  number1 = ""
  number2 = ""
  operator = ""
  display.innerText = "0"
  calculo.innerText = ""
}

function backspace() {
  if (operator === "") {
    number1 = number1.slice(0, -1)
  } else if (number2 !== "") {
    number2 = number2.slice(0, -1)
  } else {
    operator = ""
  }
  display.innerText = number1 + "" + operator + "" + number2
}

function calculate() {
  if (number1 === "" || operator === "" || number2 === "") return

  let n1 = Number(number1)
  let n2 = Number(number2)
  let result = 0

  if (operator === "+") {
    result = n1 + n2
  } else if (operator === "-") {
    result = n1 - n2
  } else if (operator === "×") {
    result = n1 * n2
  } else if (operator === "÷") {
    result =  n1 / n2 
  } else if (operator === "%") {
    result = n1 % n2
  }
 
  result = result.toFixed(2)
  calculo.innerText = `${number1} ${operator} ${number2}`
  display.innerText = result
  mostrar = true
}

let videoBack = 1
function trocarVideo() {
  const video = document.getElementById("background-video")
  const source = document.getElementById("video-source")
  videoBack++
  if (videoBack > 4) videoBack = 1
  source.src = `assets/videoBack0${videoBack}.mp4`
  video.load()
  video.play()
}

