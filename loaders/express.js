const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;



app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/auth', require('../routes/auth'))



app.listen(PORT, () => { 
    console.log(`---------Express connected in ${PORT}------`, new Date())
})