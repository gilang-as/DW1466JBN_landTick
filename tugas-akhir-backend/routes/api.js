const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

//Controller
const { AuthLogin, AuthRegister } = require("../controllers/Auth");
const {
  GetAllTickets,
  AddTicket,
  UpdateTicket,
  DeleteTicket,
  DetailTicket
} = require("../controllers/Ticket");
const {
  MyOrders,
  GetAllOrders,
  AddOrder,
  StatusOrder
} = require("../controllers/Order");
const { UserDetails } = require("../controllers/User");

//Default message
router.get("/", (req, res) => {
  res.send({ message: "Hello" });
});

//AUTH
router.post("/auth/login", AuthLogin);
router.post("/auth/register", AuthRegister);

//TICKET
router.get("/tickets", GetAllTickets);
router.post("/ticket", AddTicket);
router.put("/ticket/:id", UpdateTicket);
router.delete("/ticket/:id", DeleteTicket);
router.get("/ticket/:id", DetailTicket);

//ORDER
router.get("/orders", auth, GetAllOrders);
router.post("/order", auth, AddOrder);
router.get("/my-orders", auth, MyOrders);
router.post("/status-order", auth, StatusOrder);

//
router.get("/user", auth, UserDetails);
module.exports = router;
