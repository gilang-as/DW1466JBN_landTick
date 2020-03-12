const models = require("../models");
const jwt = require("jsonwebtoken");
const UserModel = models.user;

exports.UsersAll = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const User = await UserModel.findAll();
    res.status(200).send({
      status: true,
      message: "Success Get Users",
      data: User
    });
  } catch (err) {
    console.log(err);
  }
};
exports.UserDetails = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const User = await UserModel.findOne({
      where: { id }
    });
    res.status(200).send({
      status: true,
      message: "Success Get User Details",
      data: User
    });
  } catch (err) {
    console.log(err);
  }
};
exports.UserCreate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const User = await UserModel.create(req.body);
    res.status(200).send({
      status: true,
      message: "Success Add New User",
      data: User
    });
  } catch (err) {
    console.log(err);
  }
};
exports.UserUpdate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const User = await UserModel.update(req.body, {
      where: { id }
    });
    if (User) {
      const Data = await UserModel.findOne({
        where: { id }
      });
      res.status(200).send({
        status: true,
        message: "Success Updated a User",
        data: Data
      });
    } else {
      res.status(200).send({
        status: false,
        message: "Error Updated a User"
      });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.UserCreate = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const User = await UserModel.create(req.body);
    res.status(200).send({
      status: true,
      message: "Success Add New User",
      data: User
    });
  } catch (err) {
    console.log(err);
  }
};
exports.UserDelete = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const User = await UserModel.destroy({
      where: { id }
    });
    if (User) {
      res.status(200).send({
        status: true,
        message: "Success Deleted a User"
      });
    } else {
      res.status(200).send({
        status: false,
        message: "Error Deleted a User or User Not Found"
      });
    }
  } catch (err) {
    console.log(err);
  }
};
