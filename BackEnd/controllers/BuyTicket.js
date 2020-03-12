const models = require("../models");
const jwt = require("jsonwebtoken");
const OrderModel = models.orders;
// const TicketModel = models.tickets;
// const UserModel = models.users;
getDateNow = () => {
  var date = new Date();
  var str =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  return str;
};
exports.ByTicket = async (req, res) => {
  const { route_id, qty } = req.body;
  const token = req.header("Authorization").replace("Bearer ", "");
  const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  console.log(getDateNow());
  try {
    const Orders = await OrderModel.create({
      user_id,
      route_id,
      date,
      total,
      price,
      status: "unpaid"
    });
    res.status(200).send({
      status: true,
      message: "Success Get All Orders",
      data: Orders
    });
  } catch (err) {
    console.log(err);
  }
};
