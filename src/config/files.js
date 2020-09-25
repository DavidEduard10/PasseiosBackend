const multer = require('multer');
const path = require('path');

/**
 * Referencia ao arquivos nos documentos
 * . - diretorio atual
 * .. - diretorio anterior
 */

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
        },
    })
}