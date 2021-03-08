const express = require('express');
const path = require('path');

//Init app
const app = express();


//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home route
app.get('/', (req, resp) => {
    let articles = [
        {
            id: 1,
            title: 'Article One',
            author: 'Bobby',
            body: 'This is article one.'
        },
        {
            id: 2,
            title: 'Article Two',
            author: 'John',
            body: 'This is article two.'
        },
        {
            id: 3,
            title: 'Article Three',
            author: 'Fred',
            body: 'This is article three.'
        }
    ];
    resp.render('index', {
        title: 'Articles',
        articles: articles
    });
});

//Add route
app.get('/articles/add', (req, resp) => {
    resp.render('add_article', {title: 'Add Article'});
});

//Start server
app.listen(3000, () => {
    console.log('server started on port 3000....');
});