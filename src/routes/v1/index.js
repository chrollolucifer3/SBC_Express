const express = require('express');
const router = express.Router();
const userRouter = require('./userRoutes')
const customerRouter = require('./customerRoutes')
const productRouter = require('./productRoutes')

router.get('/status', (req, res) => {
    res.status(400).json({msg: `API`})
})

router.use('/user', userRouter)
router.use('/customer', customerRouter)
router.use('/product', productRouter)


module.exports = router;