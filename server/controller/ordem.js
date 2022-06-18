const { attributes } = require('sequelize/lib/model');
const categoria = require('./categoria');

const Ordem = require('../models').Ordem;
const Categoria = require('../models').Categoria;

module.exports = {

    async getOrdemsById(req, res) {
        try {
            const ordem = await Ordem.findAll({
                where: {
                    id: req.params.categoriaId
                }
            });

            res.status(200).json(ordem)

        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }

    },


    async getOrdems(req, res) {
        try {
            const categoties = await Categoria.find({
                id: req.params.categoriaId
            });

            if (categoties) {
                const resp = await Ordem.findAll({
                    categoriaId: req.params.categoriaId
                })
                console.log(resp)
                res.status(201).send(resp);
            } else {
                res.status(404).send("Category Not Found")
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }

    },
    async createOrdem(req, res) {

        try {
            const ordem = await Ordem.create({
                name: req.body.name,
                categoriaId: req.body.categoriaId,
                contact: req.body.contact,
                company: req.body.company,
                estateAgency: req.body.estateAgency,
                description: req.body.description,
                deadline: req.body.deadline
            });
            res.status(201).send(ordem)
        } catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async update(req, res) {
        try {
            const ordems = await Ordem.find({
                id: req.params.ordemId
            });

            if (ordems) {
                const updatedOrdem = await ordems.update({
                    name: req.body.name,
                    contact: req.body.contact,
                    company: req.body.company,
                    estateAgency: req.body.estateAgency,
                    description: req.body.description,
                    deadline: req.body.deadline
                })

                res.status(201).send(updatedOrdem);
            } else {
                res.status(404).send("Ordem Not Found");
            }

        } catch (e) {
            console.log(e);
            res.status(400).send(e);
        }

    }
}