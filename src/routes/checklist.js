const express = require('express')

const router = express.Router();

router.get('/', (res, req) => {
    console.log('Olá');
    res.send();
})
router.post('/', (res, req) => {
    console.log(req.body);
    res.status(200).json(req.body);
});

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`ID: ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`PUT ID: ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`DELETE ID: ${req.params.id}`)
})

router.delete()

module.exports = router;
