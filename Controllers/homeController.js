const { Vinyl } = require("../Models/vinyls")
const axios = require("axios");

class Controllers {
  async read(req, res) {
    const vinyls = await Vinyl.find();
    res.status(200).json(vinyls);
  }
  async create(req, res) {
    try {
      const vinylsSave = new Vinyl(req.body);
      await vinylsSave.save();
      res.status(201).json(vinylsSave);
    } catch (error) {
      res.status(501).json(({ msg: "information cannot be saved" }, error));
    }
  }
}

module.exports = new Controllers();
