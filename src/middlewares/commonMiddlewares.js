

const mid= async function(req,res,next){
    const user =req.headers.isfreeappuser
    if(!user){
        return res.send({msg:"the request is missing a mandatory header"})
    }
    req.body["isFreeAppUser"]=user
    next()
}
module.exports.mid=mid