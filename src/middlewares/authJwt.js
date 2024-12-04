import jwt from 'jsonwebtoken'
import config from '../config'

export const verifyToken = (req, res, next) => {
    try {
        const {token} = req.cookies

        if (!token) {
            return res.status(401).json({ message: 'Token no proporcionado'})
        }

        const decoded = jwt.verify(token, config.SECRET)
        req.id_user = decoded.id
        next()
    } catch (error) {
        console.error("Error al verificar token:", error.message)
        res.status(401).json({ message: 'Token inválido o expirado' })
    }
}

export const isModerator = async (req, res, next) =>{
    const user = await user.findById(req.user.id)
    const roles = await roles.find({_id: {$in: user.roles}})
    
    for(let i = 0; i < roles.length;i++){
        if(roles[i].name === 'moderator'){
            next();
            return;
        }
    }

    return res.status(403).json({message: 'Require Moderator role'})

}

export const isAdmin = async (req, res, next) =>{
    const user = await user.findById(req.user.id)
    const roles = await roles.find({_id: {$in: user.roles}})
    
    for(let i = 0; i < roles.length;i++){
        if(roles[i].name === 'admin'){
            next();
            return;
        }
    }

    return res.status(403).json({message: 'Require Admin role'})
}

export const authRequired = (req, res, next) => {
  try {
    const {token} = req.cookies;

    if(!token)
    return res.status(401).json({message: 'No token, authorization denied'})

    jwt.verify(token, config.SECRET, (err, user) =>{
        if(err) return res.status(403).json({message: 'Invlid token'})

        req.user = user
        next();
    })
  } catch (error) {
    console.log(error)
  }
}