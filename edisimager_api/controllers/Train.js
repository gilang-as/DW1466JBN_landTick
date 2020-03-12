const models = require("../models");
const jwt = require("jsonwebtoken");
const TrainModel = models.train;

exports.TrainsAll = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const Train = await TrainModel.findAll();
    res.status(200).send({
      status: true,
      message: "Success Get Trains",
      data: Train
    });
  } catch (err) {
    console.log(err);
  }
};
exports.TrainDetails = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const Train = await TrainModel.findOne({
      where: { id }
    });
    res.status(200).send({
      status: true,
      message: "Success Get Train Details",
      data: Train
    });
  } catch (err) {
    console.log(err);
  }
};
exports.TrainCreate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const Train = await TrainModel.create(req.body);
    res.status(200).send({
      status: true,
      message: "Success Add New Train",
      data: Train
    });
  } catch (err) {
    console.log(err);
  }
};
exports.TrainUpdate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const Train = await TrainModel.update(req.body, {
      where: { id }
    });
    if (Train) {
      const Data = await TrainModel.findOne({
        where: { id }
      });
      res.status(200).send({
        status: true,
        message: "Success Updated a Train",
        data: Data
      });
    } else {
      res.status(200).send({
        status: false,
        message: "Error Updated a Train"
      });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.TrainCreate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const Train = await TrainModel.create(req.body);
    res.status(200).send({
      status: true,
      message: "Success Add New Train",
      data: Train
    });
  } catch (err) {
    console.log(err);
  }
};
exports.TrainDelete = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const Train = await TrainModel.destroy({
      where: { id }
    });
    if (Train) {
      res.status(200).send({
        status: true,
        message: "Success Deleted a Train"
      });
    } else {
      res.status(200).send({
        status: false,
        message: "Error Deleted a Train or Train Not Found"
      });
    }
  } catch (err) {
    console.log(err);
  }
};
