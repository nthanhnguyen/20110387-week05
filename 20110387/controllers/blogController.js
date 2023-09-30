const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Trang danh sách các bài post
router.get('/', (req, res) => {
    const posts = Post.getAllPosts();
    res.render('index', { posts });
});

// Trang chi tiết 1 bài post
router.get('/post/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = Post.getPostById(postId);
    res.render('post', { post });
});

// Trang tạo mới bài post
router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const { title, content } = req.body;
    Post.createPost(title, content);
    res.redirect('/blog');
});

// Trang chỉnh sửa bài post
router.get('/edit/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = Post.getPostById(postId);
    res.render('edit', { post });
});

router.post('/edit/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    Post.editPost(postId, title, content);
    res.redirect('/blog');
});

// Xóa bài post
router.post('/delete/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    Post.deletePost(postId);
    res.redirect('/blog');
});

module.exports = router;
