const UserService = require("../services/UserService");

class UserController {
    
    create = async (req, res, next) => {
        try {
            const {username, email, phone, age} = req.body;

            let data = {
                username, email, phone, age
            }

            const user = await UserService.create(data);

            res.status(200).json({
                user
            })
        } catch (error) {
            throw error;
        }
    }

    get = async (req, res, next) => {
        try {
            const users = await UserService.getUser();
            res.status(200).json({
                users
            })
            
        } catch (error) {
            throw error;
        }
    }

    update = async (req, res, next) => {
        try {
            const { username, email, phone, age } = req.body;
            const { id } = req.params;
            let data = {
                username, email, phone, age
            }
            const result = await UserService.updateUser(id, data);
            
            if(result) {
                res.status(200).json({msg: 'success'})
            } else {
                res.status(500).json({msg: 'fail'})
                
            }

        } catch (error) {
            throw error;
        }
    }

    delete = async (req, res, next) => {
        try {
            const {id} = req.params;

            const result = await UserService.deleteUser(id);
            if(result) {
                res.status(200).json({msg: 'success'})
            } else {
                res.status(500).json({msg: 'fail'})
            }
        } catch (error) {
            throw error
        }
    }

    // update = (req, res, next) => {
    //     try {
    //         const updateUserData = req.body;
    //         res.status(200).json({msg:`Cập nhật User`,  data:updateUserData })
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // delete = (req, res, next) => {
    //     try {
    //         const userID = req.params.id;
    //         res.status(200).json({msg: ` Xóa User có id: ${userID} thành công `})
    //     } catch (error) {
    //         throw error;
    //     }
    // }
}

module.exports = new UserController();