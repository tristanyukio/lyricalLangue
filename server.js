// const express = require('express');
// const app = express();
// const path = require('path');
// const mongoose = require('mongoose');
// const PORT = 3000;
// const userController = require('./Usercontroller.js');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static(path.resolve(__dirname, './dist')));

// mongoose.connect('mongodb+srv://tristan913:1234@cluster0.zlp4cgx.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', () => {
//   console.log('Connected to Database');
// });

// // app.use((req, res, next) => {
// //   res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
// //   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
// //   res.header('Access-Control-Allow-Headers', 'Content-Type');
// //   next();
// // });
// app.options('/register', (req, res) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
//   res.header('Access-Control-Allow-Methods', 'POST');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.sendStatus(200);
// });

// app.options('/login', (req, res) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
//   res.header('Access-Control-Allow-Methods', 'POST');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.sendStatus(200);
// });

// app.options('/listen', (req, res) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
//   res.header('Access-Control-Allow-Methods', 'POST');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.sendStatus(200);
// });

// app.options('/cards', (req, res) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
//   res.header('Access-Control-Allow-Methods', 'GET');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.sendStatus(200);
// });

// app.use(express.static(path.resolve(__dirname, './src')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'src/index.html'));
// });


// app.post('/register', 
//   // userController.hash, 
//   userController.createUser, 
//   (req, res) => {
//   res.status(200).send(res.locals.savedUser);
// });
// app.post('/login', 
//   userController.checkUser, 
//   (req, res) => {
//   res.status(200).send(res.locals.user);
// });

// app.post('/listen', 
//   userController.saveWord, 
//   (req, res) => {
//   res.status(200).send(res.locals.savedWord);
// });

// app.get('/cards', 
//   userController.getWords, 
//   (req, res) => {
//   res.status(200).send(res.locals.words);
// });


// // app.post('/login', createUser, (req, res) => {
// //   res.status(200).send(res.locals.savedStudent);
// // });

// app.use((req, res) => res.sendStatus(404));

// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 400,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });

// app.listen(PORT, () => {
//   console.log(`Listening on PORT: ${PORT}`);
// });