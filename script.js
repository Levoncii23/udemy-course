
"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", '');
const lastFilm = prompt("Один из последних просмотренных фильмов?", ''), 
    rateFilm = prompt("На сколько оцените его?", ''),
    lastFilm2 = prompt("Один из последних просмотренных фильмов?", ''), 
    rateFilm2 = prompt("На сколько оцените его?", '');
    
let ownFilm = lastFilm + " : " + rateFilm

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[lastFilm] = rateFilm;
personalMovieDB.movies[lastFilm2] = rateFilm2;

console.log(personalMovieDB);