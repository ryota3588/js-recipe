// 練習問題 １

// 関数名:
// 引数:
// 返り値:

// 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...

// f2: 1, 10, 100, 1000, 10000, ...

// f3: 2, 14, 107, 1010, 10013, ...

// 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply を作成して正しく動くかテストしてください。

// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound を作成して正しく動くかテストしてください。

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const sayHello = function () {
  console.log("hello")
}

inputText.oninput = sayHello
inputDate.oninput = sayHello

const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}
