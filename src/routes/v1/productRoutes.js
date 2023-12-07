const express = require('express')
const router = express.Router();

    //Get method
router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.status(200).json({msg: `Get id: ${id}`})
})

router.get('/test', (req, res) => {
    const {page, sort} = req.query;
    res.status(200).json({ msg: `Get query string ${page} ${sort}`})
})

    //POST method
router.post('/', (req, res) => {
    const {id, name} = req.body;
    res.status(200).json({ 
        id,
        name
    })
});

    // PUT method
router.put('/', (req, res) => {
    
    const updateProductData = req.body;
  
    res.status(200).json({ message: ` cập nhật thành công`, data: updateProductData });
  });

  // DELETE method
router.delete('/:id', (req, res) => {
    const productID = req.params.id;
  
    res.status(200).json({ message: `Product với id: ${productID} xóa thành công` });
  });

module.exports = router;