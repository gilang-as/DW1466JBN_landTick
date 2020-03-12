const models = require("../models");
// const jwt = require("jsonwebtoken");
const RouteModel = models.route;
const TrainModel = models.train;
const StationModel = models.station;

exports.RoutesAll = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const Route = await RouteModel.findAll({
      include: [
        {
          model: TrainModel,
          as: "train",
          attributes: ["id", "name", "category", "seats"]
        },
        {
          model: StationModel,
          as: "start",
          attributes: ["id", "name", "code", "area"]
        },
        {
          model: StationModel,
          as: "dest",
          attributes: ["id", "name", "code", "area"]
        }
      ],
      attributes: { exclude: ["train_id", "starting_point", "destination"] }
    });
    res.status(200).send({
      status: true,
      message: "Success Get Routes",
      data: Route
    });
  } catch (err) {
    console.log(err);
  }
};
exports.RouteDetails = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const Route = await RouteModel.findOne({
      where: { id }
    });
    res.status(200).send({
      status: true,
      message: "Success Get Route Details",
      data: Route
    });
  } catch (err) {
    console.log(err);
  }
};
exports.RouteCreate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const Route = await RouteModel.create(req.body);
    res.status(200).send({
      status: true,
      message: "Success Add New Route",
      data: Route
    });
  } catch (err) {
    console.log(err);
  }
};
exports.RouteUpdate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const Route = await RouteModel.update(req.body, {
      where: { id }
    });
    if (Route) {
      const Data = await RouteModel.findOne({
        where: { id }
      });
      res.status(200).send({
        status: true,
        message: "Success Updated a Route",
        data: Data
      });
    } else {
      res.status(200).send({
        status: false,
        message: "Error Updated a Route"
      });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.RouteCreate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const Route = await RouteModel.create(req.body);
    res.status(200).send({
      status: true,
      message: "Success Add New Route",
      data: Route
    });
  } catch (err) {
    console.log(err);
  }
};
exports.RouteDelete = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const Route = await RouteModel.destroy({
      where: { id }
    });
    if (Route) {
      res.status(200).send({
        status: true,
        message: "Success Deleted a Route"
      });
    } else {
      res.status(200).send({
        status: false,
        message: "Error Deleted a Route or Route Not Found"
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.RoutesSearch1 = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const Route = await RouteModel.findAll({
      include: [
        {
          model: TrainModel,
          as: "train",
          attributes: ["id", "name", "category", "seats"]
        },
        {
          model: StationModel,
          as: "start",
          attributes: ["id", "name", "code", "area"]
        },
        {
          model: StationModel,
          as: "dest",
          attributes: ["id", "name", "code", "area"]
        }
      ],
      attributes: { exclude: ["train_id", "starting_point", "destination"] }
    });

    res.status(200).send({
      status: true,
      message: "Success Get Routes",
      data: Route
    });
  } catch (err) {
    console.log(err);
  }
};
