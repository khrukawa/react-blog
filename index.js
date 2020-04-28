const express = require('express'); // 1
const app = express();  // 2
const mongoose = require('mongoose') // 5 after npm install mongoose --save
mongoose.connect('mongodb+srv://boiler:ppppppp5555555@cluster0-ugwst.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('DB connected !!!'))
    .catch(err => console.error(err));

app.get('/', (req, res) => {   // 4
    res.send('Hello World')
});

app.listen(5000); // 3