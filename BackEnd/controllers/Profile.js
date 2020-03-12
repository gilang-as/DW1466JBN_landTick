const models = require("../models");
const jwt = require("jsonwebtoken");
const UserModel = models.user;
exports.MyProfile = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const User = await UserModel.findOne({
      where: { id: user_id }
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
