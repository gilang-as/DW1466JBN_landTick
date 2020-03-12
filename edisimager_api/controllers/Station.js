const models = require("../models");
const jwt = require("jsonwebtoken");
const StationModel = models.station;

exports.StationsAll = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const Station = await StationModel.findAll();
    res.status(200).send({
      status: true,
      message: "Success Get Users",
      data: Station
    });
  } catch (err) {
    console.log(err);
  }
};
exports.StationDetails = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const Station = await StationModel.findOne({
      where: { id }
    });
    res.status(200).send({
      status: true,
      message: "Success Get Station Details",
      data: Station
    });
  } catch (err) {
    console.log(err);
  }
};
exports.StationCreate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const Station = await StationModel.create(req.body);
    res.status(200).send({
      status: true,
      message: "Success Add New Station",
      data: Station
    });
  } catch (err) {
    console.log(err);
  }
};
exports.StationUpdate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const Station = await StationModel.update(req.body, {
      where: { id }
    });
    if (Station) {
      const Data = await StationModel.findOne({
        where: { id }
      });
      res.status(200).send({
        status: true,
        message: "Success Updated a Station",
        data: Data
      });
    } else {
      res.status(200).send({
        status: false,
        message: "Error Updated a Station"
      });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.StationCreate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const Station = await StationModel.create(req.body);
    res.status(200).send({
      status: true,
      message: "Success Add New Station",
      data: Station
    });
  } catch (err) {
    console.log(err);
  }
};
exports.StationDelete = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const Station = await StationModel.destroy({
      where: { id }
    });
    if (Station) {
      res.status(200).send({
        status: true,
        message: "Success Deleted a Station"
      });
    } else {
      res.status(200).send({
        status: false,
        message: "Error Deleted a Station or Station Not Found"
      });
    }
  } catch (err) {
    console.log(err);
  }
};
