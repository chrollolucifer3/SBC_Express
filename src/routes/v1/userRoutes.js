const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.status(200).json({ msg: `Get id ${id}`})
})

router.get('/test', (req, res) => {
    const {page, sort} = req.query;
    res.status(200).json({ msg: `Get query string ${page} ${sort}`})
})

router.post('/', (req, res) => {
    console.log(req.body);
    const {username, password} = req.body;
    res.status(200).json({ 
        username,
        password
    })
});

module.exports = router;