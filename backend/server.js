const express = require('express');
const colors = require('colors');

const dotenv = require('dotenv');

const connectDB = require('./config/db');
const path = require('path')


dotenv.config();

const goalRoute = require('./routes/goalRoutes');
const userRoute = require('./routes/userRoutes');

const port = process.env.PORT || 5000;

const app = express();

connectDB()

const {errorHandler} = require('./middleware/errorMiddleware');

app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use((req, res, next) => {


    console.log(req.path, req.method);
    next();


});



app.use('/api/goals', goalRoute);
app.use('/api/users', userRoute);




// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }

app.use(errorHandler);
app.listen(port, () => {


    console.log(`Server started on ${port}`);
})

