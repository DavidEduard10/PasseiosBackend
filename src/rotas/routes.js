const express = require('express');

const multer = require('multer');
const uploadConfig = require('../config/files')
const SessoesController = require('../controllers/SessoesController');
const PasseiosController = require('../Controllers/PasseiosController');
const DashboardController = require('../controllers/DashboardController');
const ReservasController = require('../controllers/ReservasController');
const routes = express.Router();

const upload = multer(uploadConfig);

const fazerLogin = (req,res) => {
    //return res.json({mensagem:"Usar para autenticação"});
};
const listarPasseios = (req,res) => {
    //return res.json({mensagem:"Usar para listar passeios"});
};
const cadastrarPasseios = (req,res) => {
    //return res.json({mensagem:"Usar para cadastrar passeios"});
};
const exibeDashboard = (req,res) => {
    //return res.json({mensagem:"Usar para dashboard"});
};
const reservaPasseio = (req,res) => {
    //const {pid} = req.params;
    //return res.json({mensagem:`Usar para reservar um passeio com pid=${pid}`});
};

routes.post('/sessoes', SessoesController.store);
routes.get('/passeios', PasseiosController.index);
routes.post('/passeios', upload.single('imagem'), PasseiosController.store);
routes.get('/dashboard', DashboardController.show);
routes.post('/passeios/:pid/res', ReservasController.store);

module.exports = routes;