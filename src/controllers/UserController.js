
class UserController {
    create = (req, res, next) => {
        try {
            const {username, password} = req.body;
            res.status(200).json({
                username,
                password
            })
        } catch (error) {
            throw error;
        }
    }

    get = (req, res, next) => {
        try {
            const id = req.params.id;
            res.status(200).json({msg: `Get id: ${id}`})
        } catch (error) {
            throw error;
        }
    }

    get = (reqd, res, next) => {
        try {
            const {page, sort} = req.body;
            res.status(200).json({msg: `Get query string ${page} ${sort}`})
        } catch (error) {
            throw error;
        }
    }

    update = (req, res, next) => {
        try {
            const updateUserData = req.body;
            res.status(200).json({msg:`Cập nhật User`,  data:updateUserData })
        } catch (error) {
            throw error;
        }
    }

    delete = (req, res, next) => {
        try {
            const userID = req.params.id;
            res.status(200).json({msg: ` Xóa User có id: ${userID} thành công `})
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserController;