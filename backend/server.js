const express = require('express');

const dotenv = require('dotenv');


dotenv.config();

const goalRoute = require('./routes/goalRoutes');

const port = process.env.PORT || 5000;

const app = express();

const {errorHandler} = require('./middleware/errorMiddleware');

app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use((req, res, next) => {


    console.log(req.path, req.method);
    next();


});



app.use('/api/goals', goalRoute);
app.use(errorHandler);




app.listen(port, () => {


    console.log(`Server started on ${port}`);
})

