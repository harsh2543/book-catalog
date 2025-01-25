const express = require('express');
const {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
    searchBooks,
} = require('../controllers/bookController'); // Fixed path

const router = express.Router();

router.post('/', createBook); // Create a book
router.get('/', getAllBooks); // Get all books
router.get('/:id', getBookById); // Get a book by ID
router.put('/:id', updateBook); // Update a book
router.delete('/:id', deleteBook); // Delete a book
router.get('/search', searchBooks); // Search books by title or author

module.exports = router;
