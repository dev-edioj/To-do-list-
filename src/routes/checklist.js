const express = require('express')

const router = express.Router();

router.get('/', (res, req) => {
    console.log('Olá');
    res.send();
})

module.exports = router;
