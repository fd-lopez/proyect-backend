const {Vinyl} = require('../Models/vinyls')

const validateId = async (req, res, next) =>{
    try{
        const vinyls = await Vinyl.findById(req.params.id);
        if(vinyls !== null){
            next();
        } else {
            res.status(500).json({msg:"Id invalid"});
        }
    } catch(error){
        res.status(500).json(error)
    }
}

module.exports={validateId}