import React from "react";
import "./style.css";
import cat from "./cat.svg"
import frame from "./framge.svg"


export default function App() {
  return (
  <div>
  <body>
    <html lang="ru"/>
    <head>
    <meta charset="utf-8"></meta>
    <title>Привет всем присутствующим</title>
    <link rel="stylesheet" href="style.css"/>
    <link rel="shortcut icon" src="cat_icon.png"/>
    <meta name="viewport" content="width=device-width"/>
    </head>

    <header class="site-header">
      <div class="container">
        <h1>УЧИМСЯ ВЕРСТАТЬ САЙТЫ</h1>
        <div class="imgpos">
        <img class="cat" src={cat} width="510" height="510" alt="Кот"/>
        </div>
      </div>
    </header>

        <div class="info">
    <img class="back" src="imgs/Frame.png"/>
    <a target="_blank" class="button" href="https://yandex.ru/images/search?from=tabbar&text=рыжие%20коты">БОЛЬШЕ</a>
    </div>

    <footer>
    <a target="_blank" href="https://icons8.ru/icons/set/cat-butt">Cat Butt icon</a> иконка от <a target="_blank" href="https://icons8.ru">Icons8</a>
    </footer>
  </body>
  </div>
  )
  

};


