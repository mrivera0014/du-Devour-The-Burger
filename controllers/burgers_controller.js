const { Router } = require('express');
const express = require('express');
const burger = require('../models/burger')
// const router = express.Router()

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const object = {
            burgers: data
        };
        console.log(object)
        res.render('index', object);
    });
})

router.post('/api/burgers', (req, res) => {
    burger.insertOne(['name', 'devoured'], [req.body.name, req.body.devoured], (result) => {
        res.json({ id: result.insertId })
    })
})

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log(`condition`, condition);

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end()
            }
            return res.status(200).end()
        }
    )
})