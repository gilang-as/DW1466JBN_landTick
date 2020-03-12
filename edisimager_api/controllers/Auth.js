const jwt = require("jsonwebtoken");
const models = require("../models");
const UserModel = models.user;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
// LOGIN
exports.AuthLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ where: { username, password } });
    if (user) {
      const token = jwt.sign(
        { user_id: user.id, level: user.level },
        process.env.SECRET_KEY
      );
      res.status(200).send({ status: true, message: "Login Success", token });
    } else {
      res.status(200).send({ status: false, message: "Invalid login" });
    }
  } catch (err) {
    console.log(err);
  }
};

//REGISTER
exports.AuthRegister = async (req, res) => {
  try {
    const { username, email } = req.body;
    const check = await UserModel.findOne({
      where: { [Op.or]: [{ email }, { username }] }
    });
    if (check) {
      res.status(401).send({
        status: false,
        message: "The email or username is ready to login"
      });
    } else {
      const user = await UserModel.create(req.body);
      if (user) {
        const token = jwt.sign(
          { user_id: user.id, level: user.level },
          process.env.SECRET_KEY
        );
        res
          .status(200)
          .send({ status: true, message: "Register Success", token });
      } else {
        res.status(200).send({ status: false, message: "Invalid Register" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
