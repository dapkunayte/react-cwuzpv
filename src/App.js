import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
    <html lang="ru"></html>
    <head>
    <meta charset="utf-8"></meta>
    <title>Привет всем присутствующим</title>
    <link rel="stylesheet" href="style.css"></link>
    <link rel="shortcut icon" src="cat_icon.png"></link>
    <meta name="viewport" content="width=device-width"></meta>
    </head>

    <header class="site-header">
      <div class="container">
        <h1>УЧИМСЯ ВЕРСТАТЬ САЙТЫ</h1>
        <div class="imgpos">
        <img class="cat" src="imgs/cat2.png" width="510" height="510" alt="Кот"></img>
        </div>
      </div>
    </header>

        <div class="info">
    <img class="back" src="imgs/Frame.png"></img>
    <a target="_blank" class="button" href="https://yandex.ru/images/search?from=tabbar&text=рыжие%20коты">БОЛЬШЕ</a>
    </div>

    <footer>
    <a target="_blank" href="https://icons8.ru/icons/set/cat-butt">Cat Butt icon</a> иконка от <a target="_blank" href="https://icons8.ru">Icons8</a>
    </footer>
    </div>
  )
  

};


