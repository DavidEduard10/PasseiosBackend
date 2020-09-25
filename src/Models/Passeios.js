const mongoose = require('mongoose');

/**
 * Login feito com email
 */

const PasseioSchema = new mongoose.Schema({
    imagem: String,
    titulo: String,
    preco: String,
    categoria: [String],
    descricao: String,
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

module.exports = mongoose.model('Passeio', PasseioSchema);