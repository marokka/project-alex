"use strict";

const numberOfFilms = prompt("Сколько фильмов вы посмотрели","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if (personalMovieDB.count<10){
    alert("Просмотрено довольно мало фильмов");
}else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
    alert("Вы классический зритель");
}else if(personalMovieDB.count>=30){
    alert("Вы киноман");
}else{
    alert("Error");
}

for(let i = 0; i < 2; i++){
    const a = prompt("Последний фильм какой вы смотрели??"),
          b = prompt("Оцените фильм");
    if (a != null && b != null && a!='' && b!='' && a.length<50)
    {
        personalMovieDB.movies[a] = b;
    }else{
        alert('Error!!!');
        i--;
    }

}

console.log(personalMovieDB);


