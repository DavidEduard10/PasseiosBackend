const mongoose = require('mongoose');

/**
 * Login feito com email
 */

const UsuarioSchema = new mongoose.Schema({
    email: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);