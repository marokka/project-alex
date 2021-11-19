"use strict";


// const result = confirm("Вы здесь?"); - задать вопрос пользователю

// const answer = +prompt("Вам есть 18 лет?",""); - задать вопрос пользователю с возможностью ответить, + - обозначает преоброзования формата
// унарный + который переобразует формат
//-------------------------------------------------------------------------------------------------------------------------------------
// const answers = [];

// answers[0]= prompt('Как ваше Имя?','');
// answers[1]= prompt('Как ваше Фамилия?','');
// answers[2]= prompt('Сколько вам лет?','');
//--------------------------------------------------Работа с массивом с помощью promt

// const category = 'toys';

// console.log(`htps://someurl.com/${category}/5`);


// const arr = ['Alex'];

// alert(`Привет, ${arr[0]}`);

// console.log('arr '+'- object');

// let incr = 10,
//     decr = 10;

// // incr++;    // постфикстная - показывает при выводе элемнта старое значение, после увеличивает или уменьшает
// // --decr;    // префиксная  - сначала делает дейтвие потом выводит
// console.log(incr++);
// console.log(decr--);

// console.log(5%2); // отсаток от деления 

// console.log(2 + 2 * 2 !== '6'); // == - сравнение двух элементов(любого формата), === - строгое сравнение элементов , 
// // && - и - если оба правдивы то true, если один из элементов лож то false
// // || - или - если один из элементов true то результат true
// // ! - отрицание
// const isChecked = true,
//       isClose = false;

// console.log(isChecked || !isClose); 

// ------- Первый урок

// const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?","");

// console.log(numberOfFilms);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?",""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?","");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
// --------- конец------------------------------------------------------------------------------------------------------------

// -------Условия-----
// if (1){
//     console.log("OK");
// }else {
//     console.log("Error");
// }

// const num = 50;

// if (num<49){
//     console.log("ErroR!!!");
// } else if (num>100){
//     console.log("Много");
// }else {
//     console.log("OK");
// }
  
// (num === 50) ?  console.log("OK") : console.log("ErroR!!!");


// const num = 51;
// switch(num) {

//     case 49: console.log("bad");
//     break;
    
//     case 100: console.log("big");
//     break;

//     case 50: console.log("Nice");
//     break;

//     default: console.log("ban");
//     break;

// }
// ------------End------------------

// ------------Циклы----------------
// let num = 50;

// // while(num<=55){
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num<=55);

// for(let i = 1;i<=10;i++){
//     if(i===6){
//         break;// break - останавливает цикл, так же есть continue - он позволяет пропустить не желательный шаг но приэтом дает возможность циклу проделать весь процесс 
//     }    
//     console.log(i);
// }
// ------- Второй урок-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?","");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// if (personalMovieDB.count<10)
// {
//     alert("Просмотрено достаточно мало фильмов");
// } else if(personalMovieDB.count>=10 && personalMovieDB.count<30)
// {
//     alert("Вы классический зритель");
// }else if(personalMovieDB.count>=30)
// {
//     alert("Вы киноман");
// } else {
//     alert("Error");
// }

// // const a = prompt("Один из последних просмотренных фильмов?", ""),
// //       b = prompt("На сколько оцените его?",""),
// //       c = prompt("Один из последних просмотренных фильмов?", ""),
// //       d = prompt("На сколько оцените его?","");

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++){
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?","");

//     if (a!=null && b!=null && a!='' && b!='' && a.length<50) {
//         personalMovieDB.movies[a] = b;
//         console.log("Save!!!");
//     } else {
//         console.log("Error!!!");
//         i--;
        
//     }
          
// }
// console.log(personalMovieDB);
//-------------------------------------------------------END-------------------------------------------------
//--------------------------------------------Функции----------------------------------------------------------
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 20;
// }

// showFirstMessage("Privet");

// function calc(a,b) {
//     return (a+b);
// }
// console.log(calc(4,3));

function ret(){
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);