const express = require('express');
const router = express.Router();
const {getPosts, updatePosts, createPosts, deletePosts} = require('../controllers/postControllers')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect , getPosts).post(protect , createPosts)

router.route('/:id').delete(protect , deletePosts).put(protect , updatePosts)

module.exports = router;