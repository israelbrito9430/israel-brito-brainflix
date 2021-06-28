const express = require("express");
const router = express.Router();
const books = require("../data/books.json");

const capitalize = ([first, ...rest]) => first.toUpperCase()+rest.join('')

const getBooksInGenre = (genre, books) => {
    return books.filter(book => book.genre === capitalize(genre))
}

router.get('/', (_req, res) => {
    res.status(200).json(books);
})

router.get('/:genreName', (req, res) => {
    let { genreName } = req.params;
    res.status(200).json(getBooksInGenre(genreName, books))
})

module.exports = router;