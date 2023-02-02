const alertMessage = function () {
  alert("クリックしたね")
}

alertMessage() //アラートが表示される

const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

button.onclick = alertMessage

// input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const sayHello = function (e) {
  console.log(e.target.value)
}

inputText.oninput = sayHello
inputDate.oninput = sayHello
