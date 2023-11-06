const express = require("express");
const router = express.Router();

const { createBook, getAllBooks, getBook, updateBook, deleteBook } = require("../controllers/book");

router.route('/create-book').post(createBook)
router.route('/all-book').get(getAllBooks)
router.route('/single-book/:id').get(getBook).delete(deleteBook).put(updateBook)

module.exports = router
