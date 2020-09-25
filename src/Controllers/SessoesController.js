// index, show, store, update, destroy
const Usuario = require('../models/Usuarios');
module.exports = {
    //index(){},
    //show(){},

    /**
     * 
     * async - await
     */

    async store(req, res) {
        const { email } = req.body;

        let usuario = await Usuario.findOne({ email });

        if (!usuario) {
            usuario = await Usuario.create({ email });
        }

        return res.json({ usuario })
    },
    //update(){},
    //destroy(){},
} 