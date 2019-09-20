const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');

const nameValidator = [
    validate({
      validator: 'isLength',
      arguments: [0, 40],
      message: 'Name must not exceed {ARGS[1]} characters.'
    })
  ];
  
const emailValidator = [
    validate({
      validator: 'isLength',
      arguments: [0, 40],
      message: 'Email must not exceed {ARGS[1]} characters.'
    }),
    validate({
      validator: 'isEmail',
      message: 'Email must be valid.'
    })
];

const PasswordValidator = [
    validate({
        validator: 'isLength',
          arguments: [0, 40],
          message: 'Name must not exceed {ARGS[1]} characters.'
        })
];

const userNameValidator = [
    validate({
      validator: 'isLength',
      arguments: [0, 40],
      message: 'Name must not exceed {ARGS[1]} characters.'
    })
  ];

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        validate: nameValidator
      },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        validate: emailValidator
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        unique: true,
        validate: PasswordValidator
    },
    userName: {
        type: String,
        required: [true, 'Password is required'],
        unique: true,
        validate: userNameValidator
    }
});

UserSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const User = mongoose.model('user', UserSchema);

module.exports = User;