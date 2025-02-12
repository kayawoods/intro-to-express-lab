const express = require('express');

const app = express();

// 1
app.get('/greetings/:username', (req,res) => {
    res.send(`<h1>Greetings to you, dear, ${req.params.username}!</h1>`)
})

// 2

app.get('/roll/:numberParameter', (req, res) => {      
const randomNumber = Math.ceil(Math.random() * req.params.numberParameter)

if (!randomNumber) {
    res.send(`you must specify a number`)
} else {
    res.send(`you rolled a ${randomNumber}`)
}
       
})

// 3
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:index', (req, res) => {
    const item = collectibles[req.params.index];

    if (!item) { 
        res.send("This item is not yet in stock. Check back soon!");
    } else {
        res.send(`So you want the ${item.name}? For ${item.price}, it can be yours!`);
    }
});







app.listen(3000, () => {
    // console.log('Listening on port 3000');
});


