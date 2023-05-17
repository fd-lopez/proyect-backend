const { Vinyl } = require("../Models/vinyls")
const axios = require("axios");

class Controllers {
  async read (req, res) {
    const vinyl = await Vinyl.find()
    res.status(200).json(vinyl)
  }
  // async Id(req, res){
  //   const vinyl = await Vinyl.findById(req.params.id)
  //   res.status(200).json(vinyl)
  // }
  async create (req, res) {
    try {
      const vinylsSave = new Vinyl(req.body)
      await vinylsSave.save()
      res.status(201).json(vinylsSave)
    } catch (error) {
      res.status(501).json(({ msg: "information cannot be saved" }, error))
    }
  }
  async edit (req, res) {
    await Vinyl.findByIdAndUpdate(req.params.id, req.body)
    res.status(202).json({msg:'updated object'})
  }
}
module.exports = new Controllers()