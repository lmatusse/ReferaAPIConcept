const Categoria = require('../models').Categoria;

module.exports = {

    async getCategories(req, res) {

        try {

            const response = await Categoria.findAll({});

            const categories = [];
            categories.push(response);
            console.log(categories);

            res.status(201).send(response);

        } catch (e) {
            console.log(e);

            res.status(500).send(e);
        }

    },

    async create(req, res) {
        try {
            const categories = await Categoria
                .create({
                    name: req.body.name
                });

            res.status(201).send(categories);
        } catch (e) {
            console.log(e);
            res.status(400).send(e);
        }

    },

    async update(req, res) {

        try {
            const categories = await Categoria.find({
                id: req.params.categoriaId
            });

            if (categories) {

                const updatedCatefory = await Categoria.update({
                    id: req.body.name
                });

                res.status(201).send(updatedCatefory)

            } else {

                res.status(404).send("Category Not Found");
            }

        } catch (e) {
            console.log(e);

            res.status(500).send(e);

        }
    }


}