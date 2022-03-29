const express = require('express');
const router = express.Router();
const bookCtrl = require('../controller/book.controller');


router.get('/books', bookCtrl.getBookList);
router.get('/books/details/:bookId', bookCtrl.getBookDetails);
router.post('/books/save', bookCtrl.saveBook);

module.exports = router;