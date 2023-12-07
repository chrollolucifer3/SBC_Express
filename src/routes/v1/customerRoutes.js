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
    const {username, password} = req.body;
    res.status(200).json({ 
        username,
        password
    })
});

    // PUT method
router.put('/', (req, res) => {
    
    const updateCustomerData = req.body;
  
    res.status(200).json({ message: ` cập nhật thành công`, data: updateCustomerData });
  });

  // DELETE method
router.delete('/:id', (req, res) => {
    const customerId = req.params.id;
  
    res.status(200).json({ message: `Customer với id: ${customerId} xóa thành công` });
  });

module.exports = router;