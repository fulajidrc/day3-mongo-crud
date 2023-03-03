var jwt = require('jsonwebtoken');
const auth = (req, res, next)=>{
    try{
        const token = req.cookies.loginToken
        if(token){
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            if(decoded){
                req.user = decoded;
                next();
            }else{
                return res.status(401).json({message: 'Unauthorized Access'})
            }
        }else{
            return res.status(401).json({message: 'Unauthorized Access'})
        }
    }catch(error){
        return res.status(401).json({message: 'Unauthorized Access'})
    }
}

module.exports = auth;