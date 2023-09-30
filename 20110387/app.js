const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Cấu hình Handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

// Sử dụng bodyParser để đọc dữ liệu từ form
app.use(bodyParser.urlencoded({ extended: false }));

// Cấu hình thư mục public cho CSS và JS
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const blogController = require('./controllers/blogController');
app.use('/blog', blogController);

// Khởi chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
