const Users = require('../models/user');

const authAdmin = async (req, res, next) =>{
    try {
        // Geu user pelo id
        const user = await Users.findOne({
            _id: req.user.id
        })
        if(user.role === 0)
            return res.status(400).json({msg: "Acesso negado"});

        next()
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authAdmin