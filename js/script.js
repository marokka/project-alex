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
// // && - и - если оба правдивы то true, если один из элементов лож то false, запинается на лжи
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

// function ret(){
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);
//--------------------------------------------------END-----------------------------------------------------

//---------------------------------Методы и свойства у строк и чисел----------------------------------------

// const str = "teSt";
// const arr = [1,2,3,4,5];

// console.log(str);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf("q"));

// // const logg = "Hello world";

// // console.log(logg.slice(6,11));

// // console.log(logg.substring(6,11));

// // console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";

// console.log(parseInt(test));

//------------------------------------------------------End------------------------------------------------------

//-----------------------------------------Задание--------------------------------------------------------------

// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?","");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?","");
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms(){ 
//     for (let i = 0; i < 2; i++){
//         const a = prompt("Один из последних просмотренных фильмов?", ""),
//             b = prompt("На сколько оцените его?","");

//         if (a!=null && b!=null && a!='' && b!='' && a.length<50) {
//             personalMovieDB.movies[a] = b;
//             console.log("Save!!!");
//         } else {
//             console.log("Error!!!");
//             i--;
            
//         }     
//     }
// }

// // rememberMyFilms();

// function detectPersonalLevel(){
//     if (personalMovieDB.count<10)
//     {
//         alert("Просмотрено достаточно мало фильмов");
//     } else if(personalMovieDB.count>=10 && personalMovieDB.count<30)
//     {
//         alert("Вы классический зритель");
//     }else if(personalMovieDB.count>=30)
//     {
//         alert("Вы киноман");
//     } else {
//         alert("Error");
//     }
// }

// // detectPersonalLevel();

// function showMyDB(hidden){
//     if(!hidden){
//         console.log(personalMovieDB);
//     }

// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for(let i=1;i<=3;i++){
//         const a = prompt(`Ваш любимый жанр под номером ${i}`,"");
//         personalMovieDB.genres[i-1]=a;
//     }
//     //можно сделать по другому сократить код и сразу присваивать в объект данные, не создавая переменных
//     // personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`,"");
// }
// writeYourGenres();

//----------------------------------------------END--------------------------------------------------
// --------------------------Callback функция---------------------
// function first(){

//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done(){
//     console.log('Я прошел этот урок');
// }

// learnJS('JavaScript', done);

//----------------------------------------------END--------------------------------------------------
// -------Объекты и деструктуризация объектов---------
// const options = {
//     name: 'Test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg:'red'
//     },
//     makeTest: function(){
//         console.log('Test');
//     }
// };

// // console.log(options.name);

// // delete options.name;

// // console.log(options);

// // let counter = 0;

// // for (let key in options){
// //     if (typeof(options[key])== 'object'){
// //         for (let i in options[key]){
// //             console.log(`Объект color ${i} имеет значение ${options[key][i]}`);
// //         }
// //     } else
// //     {
// //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// //         counter ++;
// //     }
    
// // }

// // console.log(counter);

// // console.log(Object.keys(options).length);

// options.makeTest();

// const {border, bg} = options.colors;

// console.log(border);
//----------------------------------------------END--------------------------------------------------

// --------------------------------Массивы и псевдомассивы--------------------------------
// ------------шаблон сортировки цыфрового массива 
// const arr = [112, 2288, 333, 68, 967, 234];
// arr.sort(compareNum);

// console.log(arr);

// function compareNum(a,b){
//     return a-b;
// }

// // // arr.pop(); // удалить в конце 1 элемент в массиве
// // // arr.push(10); //записать в конце элемент в массив
// // // console.log(arr.length);
// // // console.log(arr);
// // // -----------------------свойство массива forEach------------------------
// // arr.forEach(function(item, i, arr){
// //     console.log(`${i}: ${item} внутри массива ${arr}`);
// // });


// // console.log(arr);

// // for (let i=0; i < arr.length; i++){
// //     console.log(arr[i]);
// // }

// // обычный цыкл

// // for (let value of  arr){
// //     console.log(value);
// // }
// // работа с массиов подобными сущнастями 

// // ----сортировка массива по алфавиту
// // const str = prompt('','');

// // const products = str.split(', ');
// // products.sort();
// // console.log(products.join(';'));

// -------------------------передача данных по ссылки и значению--------------

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // передает ссылку на объект

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy (mainObj){
//     let objCopy = {};

//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
// // функция копии объекта с поверхносным
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
// // бывают глубокие и поверхноснные копии объекта
// const newNumbers = copy(numbers); // создали копию объекта с помощью функции которую создали выше

// newNumbers.a = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d:17,
//     e: 20
// };
// const clone = Object.assign({}, add);
// clone.d = 33;
// // console.log(clone);
// // console.log(add);

// const oldArray = ['a','b','c'];
// const newArray = oldArray.slice(); // метод, для копирования массива

// newArray[1] = 'aasdsada';

// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook']; // спред оператор просто ставим ""..."

// console.log(internet);


// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// // вывод копии поверхностного массива Spread

// const num = [2,5,7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// console.log();

//----------------------------------------------END--------------------------------------------------

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log('Hello');
//     }
// };
// const jonh = Object.create(soldier); // создание прототипных связей 


// // const jonh = {
// //     health: 100
// // };

// // jonh.__proto__ = soldier --- получаем свойство прототипа, из объекта, это усторевший формат

// // Object.setPrototypeOf(jonh, soldier) --- это современный метод для получения свойст прототипа


// // console.log(jonh.sayHello());
// jonh.sayHello();// взяли функцию из прототипа.


//---------------------------------------Практика за прошедшие уроки--------------


// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: true,
//     start: function() {
//         personalMovieDB.count = +prompt("Сколько фильмов вы уже смотрели?","");
        
//             while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
//                 personalMovieDB.count = +prompt("Сколько фильмов вы уже смотрели?","");
//             }
//     },
//     rememberMyFilms: function(){ 
//             for (let i = 0; i < 2; i++){
//                 const a = prompt("Один из последних просмотренных фильмов?", ""),
//                     b = prompt("На сколько оцените его?","");
        
//                 if (a!=null && b!=null && a!='' && b!='' && a.length<50) {
//                     personalMovieDB.movies[a] = b;
//                     console.log("Save!!!");
//                 } else {
//                     console.log("Error!!!");
//                     i--;
                    
//                 }     
//             }
//     },
//     detectPersonalLevel: function(){
//             if (personalMovieDB.count<10)
//             {
//                 alert("Просмотрено достаточно мало фильмов");
//             } else if(personalMovieDB.count>=10 && personalMovieDB.count<30)
//             {
//                 alert("Вы классический зритель");
//             }else if(personalMovieDB.count>=30)
//             {
//                 alert("Вы киноман");
//             } else {
//                 alert("Error");
//             }
//     },
//     showMyDB: function(hidden){
//             if(!hidden){
//                 console.log(personalMovieDB);
//             }
//     },
//     writeYourGenres: function() {
//             for(let i=1;i < 2;i++){
//                 // let genre = prompt(`Ваш любимый жанр под номером ${i}`,"");
//                 // personalMovieDB.genres[i-1] = genre;

//                 // if (genre == '' || genre == null){
//                 //    alert('Запоните данные!!!');
//                 //    i--;
//                 // }else{
//                 //     personalMovieDB.genres[i-1] = genre;
//                 // } 
//                 let genres = prompt(`Введите ваши любимые жандры через запятую`,"");
//                 if (genres == '' || genres == null){
//                    alert('Запоните данные!!!');
//                    i--;
//                 }else{
//                     personalMovieDB.genres = genres.split(', ');
//                     personalMovieDB.genres.sort();
//                 } 
//             }
//             personalMovieDB.genres.forEach((item, i) =>{
//                 console.log(`Любимый жанр ${i+1} - это ${item}`);
//             });

//     },
//     toggleVisibleMyDB: function(){
//         if(personalMovieDB.privat){
//             personalMovieDB.privat = false;
//         }else{
//             personalMovieDB.privat = true;
//         }
//     }
// };

// personalMovieDB.writeYourGenres();


//-------------------------------------------------------------------------------------------------------------------------------------
// динамические типизации
// console.log(typeof(String(null)));// переобразование в строку

// console.log(String(null));

// console.log(typeof(String(4))); // ретко пользуются данным спосабом

// //конкатинация
// console.log(typeof(5 + '')); // при сложении со строкой у нас все равно получается строка

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px'; // динамическая типизация

// // переобразования в цыфровой тип данных

// console.log(typeof(Number('4'))); // очень устарелый вариант
// // унарный +, для смены типа данных на число.
// console.log(typeof(+'4'));

// console.log(typeof(parseInt('15px',10)));

// // boolean - типизация 

// // 0, '', null, undefined, NaN - это все будет превращатся в false

// let switcher = null;

// if(switcher){
//     console.log('Working...');
// }

// switcher = 1;

// if(switcher){
//     console.log('Working...');
// }
// // 2 вариант

// console.log(typeof(Boolean(4)));

// // 3 вариант

// console.log(typeof(!!'44444')); // превращает в булиновую
//----------------------------------------------------------------------------------------------------
//--------------------------------работа с элементами-------------------------------------------------

// const box = document.getElementById('box');// получение элемента по id указанного на html странице

// console.log(box);

// const btns = document.getElementsByTagName('button'); 
// //getElementsByTagName - обращение к элементу и получение его по тегу
// // [1] указывая инндекс, индекс дает возможность обратиться именно к конкретному элементу

// // console.log(btns); -- обращение к колекции, если элемент будет даже -
// // один на html странице все равно мы получим htmlколекцию
// // console.log(btns[1]); -- обращение к опреденному элементу, для работы с 
// // элемнтом всегда нужно обращатся напрямую к нему

// console.log(btns);

// const circles = document.getElementsByClassName('circle');
// console.log(circles); // тоже выдает html колекцию, нужно обращатся на прямую

// // const hearts = document.querySelectorAll('.heart');

// // hearts.forEach(item => {
// //     console.log(item);
// // });

// const oneHeart = document.querySelector('div'); // получаем элемент по первому попавшемуся тегу на странице 

// console.log(oneHeart);

//---------------------------------------продолжение работы с элементами------------------------------------------------

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('.heart');
      

// // box.style.backgroundColor = 'blue';
// // box.style.width = '500px'; // обращение на прямую к стилю
// box.style.cssText= 'background-color: blue; width: 500px';

// btns[1].style.borderRadius = '100%';

// // for (let i =0; i < hearts.length; i++){
// //     hearts[i].style.backgroundColor = 'black'; обращеине с помощью цыкла
// // }

// // hearts.forEach(item =>{
// //     item.style.backgroundColor = 'black'; // с помощью forEach
// // });

// const div = document.createElement('div'); // создание элемента в js-коде
// // const text = document.createTextNode('БУМ-Гаджет');

// div.classList.add('black');
// document.body.append(div); // добавление нового элемнта в конце кода

// // wrapper.append(div); вставить элемент в конце кода
// // appendChild - старый вариант
// // wrapper.prepend(div); вставить элемент в начале кода

// // hearts[1].before(div); вставить впереди
// // insertBefore (элемент который втавляем, элемент перед которым хотим вставить) - 
// // hearts[0].after(div); вставить после


// // circles[1].remove(); удалеине элемента 
// // hearts[0].replaceWith(circles[0]); // замена элемента

// // div.innerHTML = "<b>Hello WORLD</b>"; - дает возможность добавить html код, испольщовать только с html структурой
// // опасно для работы сайта если пользователь захочет взломать что-то
// // div.textContent = 'hello WorlD'; // добавляет в элемент просто текст, отлично подходит для работы с текстом
// div.innerHTML = "<b>Hello WORLD</b>";

// // div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); //вставит четко перед элементом
// // div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); втавляет в начало элемента
// // div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); вставляет конец элемента
// // div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');//вставит четко после элементом

//---------------------------------------------Работа с элементами (практика)---------------------------

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// const promoAdv = document.querySelectorAll(".promo__adv img"),
//       promoBg = document.querySelector(".promo__bg"),
//       promoGenre = promoBg.querySelector('.promo__genre'),
//       promoInteractiveList = document.querySelector('.promo__interactive-list');
// // с помощью стрелочной функции
// promoAdv.forEach(item =>{
//     item.remove();
// });
// // простая функция
// // promoAdv.forEach(function(item){
// //     item.remove();
// // });


// promoGenre.textContent = "ДРАМА";
// promoBg.style.background = 'url("img/bg.jpg") center center/cover no-repeat';

// promoInteractiveList.innerHTML = "";

// movieDB.movies.sort();

// console.log(movieDB.movies);

// movieDB.movies.forEach((film, i) =>{
//     promoInteractiveList.innerHTML += `
//     <li class="promo__interactive-item">${i+1}. ${film}
//         <div class="delete"></div>
//     </li>
//     `;
// });

//---------------------------------------------События(практика)--------------------------------------
// const btn = document.querySelector('button');
//       overlay = document.querySelector('.overlay');

// // btn.onclick = function(){
// //     alert("Vam BAN");            ----- в этом формате мы вызываем функцию и в дальнейшем по коду если мы сделаем обработчик он будет перекрывать первый
// // };

// // btn.addEventListener('click', ()=>{
// //     alert('Vam BAM');                ---- жделаем оброботчик который будет в дальнешем при создании аналогичного выполнятся последовательно
// // });

// let i = 0;

// const eventBtn = (e) => {
//     console.log(e.currentTarget);
//     console.log(e.type);
//     // i++;
//     // if (i ==1){
//     //     btn.removeEventListener('click', eventBtn);
//     // }

// };

// btn.addEventListener('click', eventBtn);
// overlay.addEventListener('click', eventBtn);

// const link = document.querySelector('a');

// link.addEventListener('click', function(event){
//         event.preventDefault();
//         console.log(event.target);
// });
//------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------Работа с элементами ДОМ, получение нод, перебор, свойства-----------------------------------

// console.log(document.head); - получаем все элементы хранящиеся в head
// console.log(document.documentElement); - получаем всю html страницу
// console.log(document.body.childNodes); - позволяет получить все ноды и узлы этого родителя элемента
// firstChild - получить первый элемент
// lastChild - получить последний элемент
{/* <li>1</li> */} // - li это ДОМ элемент , а есть Дом узел - это "1"



// console.log(document.querySelector("#current").parentNode.parentNode); // получили узел, мы продублировали parentNode - чтобы переместиться высше по дом дереву страницы
// data-(обявляем) "дальше пишем что-то что нам нужно пример:modal, close" - 
 
// console.log(document.querySelector('[data-current="3"]').previousSibling); // nextSibling - получить следующий элемент Notu именно ноту, previousSibling - получить предыдущий элемент Notu именно ноту

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); получаем именно следующий элемент

// console.log(document.querySelector("#current").parentElement);  получаем сразу элемент
// console.log(document.body.firstElementChild);

// console.log(document.body.childNodes); 
//перебор нод и получение только элементы, без текстовых нод
// for (let node of document.body.childNodes){
//     if(node.nodeName == "#text"){
//         continue;
//     }
//     console.log(node);
// }

//-------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------Практика работа с базой, с помощью элемнтов на странице-----------------------------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', () =>{
//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };
    
//     const promoAdv = document.querySelectorAll(".promo__adv img"),
//           promoBg = document.querySelector(".promo__bg"),
//           promoGenre = promoBg.querySelector('.promo__genre'),
//           promoInteractiveList = document.querySelector('.promo__interactive-list'),
//           addForm = document.querySelector('form.add'),
//           addInput = addForm.querySelector('.adding__input'),
//           checkBox = addForm.querySelector('[type="checkbox"]'); // получаем через атрибут

//     addForm.addEventListener('submit', (event) =>{
//         event.preventDefault();

//         let textInput = addInput.value;
//         const favorite = checkBox.checked;
       
//         if(textInput){
           
//             if(textInput.length>=21){
//                 textInput = `${textInput.substring(0, 22)}...`;
//             }
//             if(favorite == true){
//                 textInput = "*"+textInput;
//             }
//             movieDB.movies.push(textInput);// пушим в базу новый фильм
//             sortArr(movieDB.movies); // сортируем 
//             addNewFilms(movieDB.movies, promoInteractiveList);
//         }
//         event.target.reset();// сбрасываем форму
//     });
//     // функция удаления контента на страничкес помощью стрелочной функции
//     const deleteAdv = (arr) => {
//         arr.forEach(item =>{
//             item.remove();
//         });
//     };
//      // простая функция
//     // promoAdv.forEach(function(item){
//     //     item.remove();
//     // });
//     //---------------------------------------
    
//     // функция работы с элементами на странице
//     const editPromo = () => {
//         promoGenre.textContent = "ДРАМА";
//         promoBg.style.background = 'url("img/bg.jpg") center center/cover no-repeat';
//     };
//     //----------------------------------------
//     //----Сортировка--------------------------
//     const sortArr = (arr)=>{
//         arr.sort();
//     };
//     //---------------------------------------
//     // функция добавления элемента в массив базы данных
//     function addNewFilms(films, parent){

//         parent.innerHTML = "";
        
//         sortArr(films);

//         films.forEach((film, i) =>{
//             parent.innerHTML += `
//             <li class="promo__interactive-item">${i+1}. ${film}
//                 <div class="delete"></div>
//             </li>
//             `;
//         });
//         // удаление из списка фильм
//         document.querySelectorAll('.delete').forEach((btn,i) =>{
//             btn.addEventListener('click',()=>{
//                 btn.parentElement.remove();
//                 movieDB.movies.splice(i, 1);
//                 addNewFilms(movieDB.movies, promoInteractiveList);
//             });
//         });

//     }
//--------------------Вызовы функций
//    addNewFilms(movieDB.movies, promoInteractiveList);
//    deleteAdv(promoAdv);
//    editPromo();
//    sortArr(movieDB.movies);
// });
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------событи с мобильной весткой------------------

// touchstart - срабатывает при касании к этому элементу
// touchmove - при каждом смещении мальца будет срабатывать данное действие
// toucheend - если палец оторвался от элемента
// touchenter - когда ведем пальцем по экрану и наскальзываем на пределы этого элемента
// touchleave - когда наш палец продолжил скользить по экрану за пределы этого элемента
// touchcancel - возникет когда точка соприкосновения выходит за приделы браузера 

// window.addEventListener('DOMContentLoaded', () =>{
//     const box = document.querySelector('.box');
//     // навесили на "div" событие которе работает только на мобильной версии
//     // при клике на указанный "div"
//     box.addEventListener('touchstart', (e)=>{
//         e.preventDefault();

//         console.log('Hello!!!');
//         console.log(e.targetTouches);
//     });

//     // // навесили на "div" событие которе работает только на мобильной версии
//     // // движении по элемменту на указанный "div"
//     box.addEventListener('touchmove', (e)=>{
//         e.preventDefault();

//         console.log(e.targetTouches[0].pageX); // отслеживаем положение пальца
        
//     });

//     //  // навесили на "div" событие которе работает только на мобильной версии
//     // // отжали на указанный "div"
//     // box.addEventListener('touchend', (e)=>{
//     //     e.preventDefault();

//     //     console.log('Stop!!!');
//     // });
// });

// toches - это свойство выдает всех пальцев которые взаимодействуют с экраном
// targetTouches- если нас интересует все пальцы которые взаимодействуют именно с этим элементом
// changedTouches - список пальцев участвующих в текущем событии

//----------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------ClassList работа с свойством, делигированние событий--------------------------------------------------

// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block'); 
// // console.log(btns[0].classList.length); - получение количества классов у элемента 
// // console.log(btns[0].classList.item(1)); // - это метод, получить клас который распологается под индексом (указываем в скобках)
// // console.log(btns[1].classList.add('red')); // можно добавить элементу определенный класс (указываем название в скобках)
// // console.log(btns[0].classList.remove('blue')); // удалеине ненужного нам класса (указываем название в скобках)
// // console.log(btns[0].classList.toggle('blue')); // позволяет тоглить классы, если класс есть у нас у элемента он будет убран если
// // его нет то будет добавлен

// // if (btns[1].classList.contains('red')){
// //     console.log('red');
// // }
// // действие клик на кнопку для добавления класса или при существующем запрашивающем классе удаление его
// btns[0].addEventListener('click', () => {
//     // решение с помощью цыкла if вручную
//     // if (!btns[1].classList.contains('red')){
//     //     btns[1].classList.add('red');
//     // } else  {
//     //     btns[1].classList.remove('red');
//     // }
//     // аналогичное решение задачи с помощью toggle
//     btns[1].classList.toggle('red');
// });

// //----------------------------Делигирование событий-----------------
// // делаем событие на весь div но при этом проверяем что бы это была именно кнопка
// // wrapper.addEventListener('click', (event) =>{
// //     // console.dir(event.target); // выводим в консоль с помщью dir - чтобы увидеть в качестве объекта
// //     if (event.target && event.target.tagName == "BUTTON"){
// //         console.log('Hello!!');
// //     }
// // });

// // wrapper.addEventListener('click', (event) =>{
// //     // matches продвиннутое делигирование по силекторам которые нас интересуют
// //     if (event.target && event.target.matches("button.red")){
// //         console.log('Hello!!');
// //     }
// // });

// //обычный foeEach 
// // btns.forEach(btn =>{
// //     btn.addEventListener('click', () =>{
// //         console.log('Hello!!');
// //     });
// // });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);// метод append позволит нам добавить новую созданную кнопку на wrapper

//---------------------------------работа с табами на сайте, переключение с анимацией-------------------------------------

// назначение глобального обработчика событий, document или window - не имеет значения 
// внутри данного обработчика будут находиться все нужные нам события
// window.addEventListener('DOMContentLoaded', () =>{

//     const tabs = document.querySelectorAll('.tabheader__item'),
//           tabsContent = document.querySelectorAll('.tabcontent'),
//           tabsParent = document.querySelector('.tabheader__items'); 

//     function hideTabContant(){
//         tabsContent.forEach(item =>{
//             item.classList.add('hide');
//             item.classList.remove('show','fade');
//         });
//         // работа с класом активности
//         tabs.forEach(item =>{
//             item.classList.remove('tabheader__item_active'); // точку не ставим потому что и так работаем с классом
//         });
//     }

//     // присваеваем i = 0 для того чтобы если функция вызывается поумолчанию 
//     // мы видели сразу первый элемент функции
//     function showTabContant(i = 0){
//         tabsContent[i].classList.add('show','fade');// работаем не со стилями а сразу с классом, стили прописанны в отдельном файле
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContant();
//     showTabContant();

//     tabsParent.addEventListener('click', (event) =>{ // event - объект события
//         const target = event.target; // связи с тем что мы часто будем использовать
//         //данную переменную мы ее преопределяем
        
//         if(target && target.classList.contains('tabheader__item')){
//             tabs.forEach((item, i)=>{
//                 if(target == item){
//                     hideTabContant();
//                     showTabContant(i);
//                 }
//             });
//         }
//     }); 
// });
//----------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------setTimeot, скрипты и время их выполнения--------------------------------------------------------------------------
// window.addEventListener('DOMContentLoaded', ()=>{

//     // const timeOut = setTimeout(function(text){
//     //     console.log(text);
//     // }, 2000, 'Привет мазафака');
// // запускаем операцию с определенным истечением времени
// // первым аргументом определяется действие, вторым аргументов время отработки
// // третим аргументом можно добавлять то что будет подставлятся в функцию или событие
// // аргументов может быть бесконечное количество 
//     const btn_new = document.querySelector('.btn');
//     let timeOut, // создаем переменную глобально, которую можно перезаписать
//         i = 0;
//     //---------------ПРАКТИКА(движение элемента с интервалом)-----------
//     function myAnimation() {
//         const element = document.querySelector('.box');
//         let pos = 0;

//         const id = setInterval(frame, 10);
//         function frame(){
//             if(pos === 300){
//                 clearInterval(id);
//             } else {
//                 pos++;
//                 element.style.top = pos + 'px';
//                 element.style.left = pos + 'px';
//             }
//         }
//     }
//      btn_new.addEventListener('click', myAnimation);
  
//     //-----------------------------------------------------------------
//       // btn_new.addEventListener('click', () =>{
//     //     // const timeOut = setTimeout(logger, 2000);
//     //     // return timeOut;
//     //     timeOut = setInterval(logger, 500);
//     // });
//     // чем лучше рекрусивный setTimeout чем setInterval - если функция работает дольше интервала который мы указали 
//     // то в дальнейшем setInterval игнорирует указанный период времени для интервала.
//     // setTimeout - строго дожидается выполнения своей функции, а только после отрабатывает дальше.
    
//     // clearInterval(timeOut);// - остановили таймер 

//     // function logger(){
//     //     if(i === 3){
//     //         clearInterval(timeOut);
//     //     }
//     //     console.log('Привет мазафака');
//     //     i++;
//     // }
// });
//----------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------работа с методом Date()-----------------------------------------------------------------------------
// window.addEventListener('DOMContentLoaded', ()=>{
//     // const now = new Date(); // мы получили 6 месяц потомучто месяцы считаются с 0
//     // методы get
//     // timeStemp - хранится в милисикундах, удобно манипулировать, трансформировать милисекунды в дату и наоборот
//     // начало отчета 1970 год, отрицательное значение в методе Data() дает возможность обратиться к дате меньше 1970 года
//     // год всегда состоит из 4 цыфр
//     // console.log(now.getFullYear()); // - метод получения года даты
//     // console.log(now.getMonth()); //- метод получения месяца даты
//     // console.log(now.getDate()); // - метод получения день даты
//     // console.log(now.getDay()); // - день недели
//     // console.log(now.getHours()); // - день недели
//     // console.log(now.getUTCHours()); // - время по UTC
    
//     // console.log(now.getTimezoneOffset()); // - получаем разничу по времени с местным временем и UTC
//     // console.log(now.getTime()); // - получаем время прошедшее с 1970 по настоящее время (количество милисекунд)

//     // методы set (все методы как и get, кроме timezoneoffset)
//     // console.log(now.setHours(40));// если указать дату не правильно то метод сам себя исправит и покажет
//     // console.log(now);

//     // let start = new Date();

//     // for(let i = 0; i<100000; i++){
//     //     let some = i ** 3; // "** n"- возводит в степень которую мы укажем
//     // }

//     // let end = new Date();

//     // alert(`Цыкл отработал за ${end-start} миллисекунд`);
  
// });
//----------------------------------------------------------------------------------------------------------------------------------------------------

