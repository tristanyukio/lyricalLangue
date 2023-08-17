const { User, Word } = require('./User.model');
const bcrypt = require('bcrypt');


const userController = {
  createUser(req, res, next) {
    const { userName, password } = req.body;

    const newUser = new User({
      userName,
      password,
    });

    newUser
      .save()
      .then(savedUser => {
        console.log('saved');
        res.locals.savedUser = savedUser;
        next();
      })
      .catch(error => {
        next(error);
      });
  },

  async checkUser(req, res, next) {
    const existingUsername = await User.findOne({ userName: req.body.userName });

    if (!existingUsername) {
      res.status(400).send('Username not found');
    } else {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        existingUsername.password
      );

      if (passwordMatch) {
        res.locals.user = existingUsername;
        next();
      } else {
        res.status(400).send('Incorrect password');
      }
    }
  },

  saveWord(req, res, next) {
    console.log('helo')
    const { word, definition } = req.body;
    const newWord = new Word({
      word,
      definition,
    });
    newWord
      .save()
      .then(savedWord => {
        res.locals.savedWord = savedWord;
        next();
      })
      .catch(error => {
        next(error);
      });
    },
    getWords(req, res, next) {
      Word.find()
      .exec()
      .then(words => {
        const wordList = words.map(word => ({
          word: word.word,
          definition: word.definition
        }));
        res.locals.words = wordList
        next()
        // console.log(result)
      })
      .catch(error => {
        next(error);
      });

    }
}


module.exports = userController;





  // // Get a student from the database and send it in the response
  // // Their first name will be in the request parameter 'name'
  // // This should send the found student
  // getStudent(req, res) {

  // },

  // // Get a student from the database and update the student
  // // The student's first name will be in the request parameter 'name'
  // // The student's new first name will be in the request body
  // updateStudent(req, res) {

  // },

  // // Delete a student from the database
  // // The student's first name will be sent in the request parameter 'name'
  // // This should send a success status code
  // deleteStudent(req, res) {

  // },

  // hash(req, res, next) {
  //   if (!req.body.password) {
  //     return next();
  //   } else {
  //     const saltRounds = 10;
  //     console.log('entering hash')
  //     bcrypt.genSalt(saltRounds, function(err, salt) {
  //       if (err) return next(err);
  //       bcrypt.hash(req.body.password, salt, function(err, hash) {
  //         if (err) return next(err);
  //         console.log('finished')
  //         console.log('hash')
  //         res.locals.hash = hash
  //         return next();
  //       });
  //     });
  //   }
  // }