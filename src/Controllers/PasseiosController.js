// index, show, store, update, destroy
const Passeios = require('../models/Passeios')
const Usuarios = require('../models/Usuarios')

module.exports = {
    async index(req, res){
        const {categoria} = req.query;

        const passeios = await Passeios.find({categoria})

        return res.json(passeios)
    },
    //show(){},
    async store(req, res) {
        //console.log(req.body);
        //console.log(req.file);
        const { filename } = req.file;
        const { titulo, preco, categoria, descricao } = req.body;
        const { usuario_id } = req.headers;

        const user = await Usuarios.findById(usuario_id);

        if (!user){
            return res.status(400).json({mensagem:"usuario nao cadastrado"})
        }

        const novo_passeio = await Passeios.create({
            imagem: filename,
            titulo,
            preco,
            categoria: categoria.split(',').map(cat => cat.trim()),
            descricao,
            usuario: usuario_id

        })
        return res.json(novo_passeio)
    },
    //update(){},
    //destroy(){},
} 