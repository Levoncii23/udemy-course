
"use strict";

let numberOfFilms = prompt("Сколько фильмов вы посмотрели?");
let lastFilm = prompt("Один из последних просмотренных фильмов?"); 
let rateFilm = prompt("На сколько оцените его?")
let ownFilm = lastFilm + " : " + rateFilm

let personalMovieDB = {
    count: numberOfFilms,
    movies: [ownFilm],
    actors: {},
    genres: [],
    privat: false,
};

console.log("Последние фильмов:" + numberOfFilms + " " + personalMovieDB["movies"]);