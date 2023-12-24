const jwt = require('jsonwebtoken');
const User = require('../models/User');

class AuthController {
    
    login = async (req, res, next) => {
        try {
            if (req.body && req.body.username) {
                const dbUser = await User.findOne({ username: req.body.username });
                if (dbUser) {
                    const token = jwt.sign({ dbUser }, process.env.KEY_JWT);
                    res.status(200).json({
                        token
                    });
                } else {
                    res.status(404).json({ msg: "username không tồn tại!" });
                }
            } else {
                res.status(404).json({ msg: "username không tồn tại!" });
            }
        } catch (error) {
            next(error); // Gọi next để chuyển lỗi đến middleware xử lý lỗi tiếp theo (nếu có)
        }
    };
    
}

// login = async (req, res, next) => {
//     if(req.body && req.body.username && req.body.password) {
//         const dbUser = await USER.findOne({username: req.body.username});
//         if(dbUser) {
//             const hmac = crypto.createHmac('sha256', dbUser.salt);
//             const hpass = hmac.update(req.body.password).digest('hex');
//             if(hpass === dbUser.hpass) { //login thanh cong
//                 const token = jwt.sign({username: dbUser.username, role: dbUser.role}, config.secretkey);
//                 res.cookie('token', token);
//                 if(req.body.redirectURL) {
//                     res.redirect(req.body.redirectURL);
//                 } else res.redirect('/');
                
//             } else { //password sai
                
//                 res.render('login', {errMessage: 'Wrong password'})
//             }
//         } else { //Username khong ton tai
            
//             res.render('login', {errMessage: `${req.body.username} not existed}`})
//         }

//     } else {
        
//         res.render('login', {errMessage: 'Bad Form Data'});
//     }
// }

module.exports = new AuthController();