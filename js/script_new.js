"use strict";

const numberOfFilms = prompt("Сколько фильмов вы посмотрели","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Последний фильм какой вы смотрели??"),
      b = prompt("Оцените фильм"),
      c = prompt("Последний фильм какой вы смотрели??"),
      d = prompt("Оцените фильм");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);