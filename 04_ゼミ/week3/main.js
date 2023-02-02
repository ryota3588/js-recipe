//登場人物
const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const nextQuizButton = document.getElementById("next-quiz")

//裏方
let quizNumber = 0
const quizzes = [
  {
    text: "この果物は何でしょう？",
    image: "kudamono.jpg",
    choices: [
      {
        text: "いちご",
        isCorrect: false,
        feedback: "不正解！いちごは赤いよ！",
      },
      {
        text: "マンゴー",
        isCorrect: true,
        feedback: "正解！マンゴーは宮崎の特産品だよ！",
      },
      {
        text: "キウイフルーツ",
        isCorrect: false,
        feedback: "不正解！キウイフルーツは緑か黄色だよ！",
      },
    ],
  },
  {
    text: "このボールを使うスポーツは？",
    image: "yakyu.jpg",
    choices: [
      {
        text: "野球",
        isCorrect: true,
        feedback: "正解！野球はこのボールを使うよ！",
      },
      {
        text: "サッカー",
        isCorrect: false,
        feedback: "不正解！サッカーではないよ！",
      },
      {
        text: "バレー",
        isCorrect: false,
        feedback: "不正解！バレーではないよ！",
      },
    ],
  },
  {
    text: "この山の名前は？",
    image: "huji.jpg",
    choices: [
      {
        text: "阿蘇山",
        isCorrect: false,
        feedback: "不正解！阿蘇山は熊本にあるよ！",
      },
      {
        text: "小松山",
        isCorrect: false,
        feedback: "不正解！小松山は宮崎にあるよ！",
      },
      {
        text: "富士山",
        isCorrect: true,
        feedback: "正解！富士山は静岡にあるよ！",
      },
    ],
  },
]

// 共通の処理①
// quizNumber番目の問題を画面に表示する
const reloadQuiz = function (quizNumber) {
  // quizzes[quizNumber] は使いまわすので、定数に入れておく
  const quiz = quizzes[quizNumber]

  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text

  // フィードバックを削除
  feedback.textContent = ""

  // 次の問題ボタンを隠す
  nextQuizButton.classList.add("hidden")
}

// 共通の処理②
// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // quizzes[quizNumber].choices[choiceNumber] は使いまわすので、定数に入れておく
  const choice = quizzes[quizNumber].choices[choiceNumber]

  // フィードバックを表示
  feedback.textContent = choice.feedback

  // 正解ならば……
  if (choice.isCorrect) {
    if (quizNumber < quizzes.length - 1) {
      // 次の問題があれば、次の問題ボタンを表示
      nextQuizButton.classList.remove("hidden")
    } else {
      // 次の問題がなければ、結果を表示
    }
  }
}

choice1.onclick = function () {
  // 0番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2番目の選択肢を選択
  choose(2)
}

// 次の問題ボタンを押したら
nextQuizButton.onclick = function () {
  // 問題番号を１増やす
  quizNumber += 1
  // quizNumber番目の問題を読み込む
  reloadQuiz(quizNumber)
}

// 0番目のクイズを表示
reloadQuiz(0)
