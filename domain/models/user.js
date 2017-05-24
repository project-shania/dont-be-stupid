var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new Schema({
    firstName: { type: String, required: 'O nome é obrigatório' },
    lastName: { type: String, required: 'O sobrenome é obrigatório' },
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Informe um endereço de e-mail válido"]
    },
    username: {
        type: String,
        unique: true,
        required: 'O nome de usuário é obrigatório',
        trim: true
    },
    password: {
        type: String,
        required: 'A senha é obrigatória',
        validate: [
            (password) => {
                return password && password.length > 6;
            }, 'A senha deve ser maior que 6 caracteres'
        ]
    },
    salt: {
        type: String
    },
    occupation: {
        type: String
    },
    local: {
        type: String
    },
    level: {
        type: Number
    },
    Interests: {
        type: [String]
    },
    provider: {
        type: String
    }
    
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (pw, cb) {
    bcrypt.compare(pw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

UserSchema
    .virtual('user_info')
    .get(function () {
        return { '_id': this._id, 'username': this.username, 'email': this.email };
    });

UserSchema.set('toJSON', { getters: true, virtuals: true });
UserSchema.plugin(uniqueValidator, { message: 'Este usuário já existe' });

module.exports.User = mongoose.model('User', UserSchema);
