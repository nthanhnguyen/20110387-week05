const posts = [];
let postId = 1;

class Post {
    constructor(title, content) {
        this.id = postId++;
        this.title = title;
        this.content = content;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }

    static getAllPosts() {
        return posts;
    }

    static getPostById(id) {
        return posts.find(post => post.id === id);
    }

    static createPost(title, content) {
        const post = new Post(title, content);
        posts.push(post);
        return post;
    }

    static deletePost(id) {
        const index = posts.findIndex(post => post.id === id);
        if (index !== -1) {
            posts.splice(index, 1);
        }
    }

    static editPost(id, title, content) {
        const post = posts.find(post => post.id === id);
        if (post) {
            post.title = title;
            post.content = content;
        }
    }
}

module.exports = Post;
