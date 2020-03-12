const models = require("../models");
const jwt = require("jsonwebtoken");
const TransactionModel = models.transaction;
const UserModel = models.user;
const RouteModel = models.route;
const StationModel = models.station;
const TrainModel = models.train;

exports.TransactionsAll = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const Transaction = await TransactionModel.findAll({
      include: [
        {
          model: UserModel,
          as: "user",
          attributes: ["id", "name", "username", "email"]
        },
        {
          model: RouteModel,
          as: "route",
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
          attributes: ["id", "price", "start_time", "arrived"]
        }
      ],
      attributes: {
        exclude: ["user_id", "route_id", "starting_point", "destination"]
      }
    });
    res.status(200).send({
      status: true,
      message: "Success Get Transactions",
      data: Transaction
    });
  } catch (err) {
    console.log(err);
  }
};
exports.TransactionDetails = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const Transaction = await TransactionModel.findOne({
      where: { id }
    });
    res.status(200).send({
      status: true,
      message: "Success Get Transaction Details",
      data: Transaction
    });
  } catch (err) {
    console.log(err);
  }
};
exports.TransactionCreate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const Transaction = await TransactionModel.create(req.body);
    res.status(200).send({
      status: true,
      message: "Success Add New Transaction",
      data: Transaction
    });
  } catch (err) {
    console.log(err);
  }
};
exports.TransactionUpdate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  // console.log(req.params);
  try {
    const Transaction = await TransactionModel.update(req.body, {
      where: { id }
    });
    if (Transaction) {
      const Data = await TransactionModel.findOne({
        where: { id }
      });
      res.status(200).send({
        status: true,
        message: "Success Updated a Transaction",
        data: Data
      });
    } else {
      res.status(200).send({
        status: false,
        message: "Error Updated a Transaction"
      });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.TransactionCreate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const Transaction = await TransactionModel.create(req.body);
    res.status(200).send({
      status: true,
      message: "Success Add New Transaction",
      data: Transaction
    });
  } catch (err) {
    console.log(err);
  }
};
exports.TransactionDelete = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const Transaction = await TransactionModel.destroy({
      where: { id }
    });
    if (Transaction) {
      res.status(200).send({
        status: true,
        message: "Success Deleted a Transaction"
      });
    } else {
      res.status(200).send({
        status: false,
        message: "Error Deleted a Transaction or Transaction Not Found"
      });
    }
  } catch (err) {
    console.log(err);
  }
};
