const User = require('../models/User')

class UserService {
    
    create = async (dataUser) => {
        try {
            const user = new User(dataUser)
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    }

    getUser = async () => {
        try {

            //gọi đến model
            const users = await User.find();
            return users
        } catch (error) {
            throw error;
        }
    }

    updateUser = async(id, data) => {
        try {
            const result = await User.updateOne({_id: id}, {email: data.email});
            return true;
        } catch (error) {
            throw error;
        }
    }

    deleteUser = async (id) => {
        try {
            const result = await User.findByIdAndDelete({_id: id});
            return true;
        } catch (error) {
            throw error
        }
    }
}

module.exports = new UserService();