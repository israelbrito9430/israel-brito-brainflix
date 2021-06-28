const express = require("express");
const router = express.Router();
const books = require("../data/books.json");

const getGenres = (books) => {
    let genres = {};
    books.forEach(book => {
        genres[book.genre] = 1
    })
    return Object.keys(genres);
}

router.get('/', (_req, res) => {
    res.status(200).json(getGenres(books));
})

module.exports = router;