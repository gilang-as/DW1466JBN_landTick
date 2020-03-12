const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { MyProfile } = require("../controllers/Profile");
const {
  UsersAll,
  UserDetails,
  UserCreate,
  UserUpdate,
  UserDelete
} = require("../controllers/User");
const {
  StationsAll,
  StationDetails,
  StationCreate,
  StationUpdate,
  StationDelete
} = require("../controllers/Station");
const {
  RoutesAll,
  RouteDetails,
  RouteCreate,
  RouteUpdate,
  RouteDelete
} = require("../controllers/Route");
const {
  TrainsAll,
  TrainDetails,
  TrainCreate,
  TrainUpdate,
  TrainDelete
} = require("../controllers/Train");
const {
  TransactionsAll,
  TransactionDetails,
  TransactionCreate,
  TransactionUpdate,
  TransactionDelete
} = require("../controllers/Transaction");

const { AuthLogin, AuthRegister } = require("../controllers/Auth");

const { RoutesSearch, GetMyTickets } = require("../controllers/Ticket");

const { UploadPayment } = require("../controllers/Payment");

const { AddOrder } = require("../controllers/Order");
//Default message
router.get("/", (req, res) => {
  res.send({ message: "Welcome to my Rest API" });
});
router.post("/auth/login", AuthLogin);
router.post("/auth/register", AuthRegister);

router.get("/profile", auth, MyProfile);

router.get("/users", UsersAll);
router.get("/user/:id", UserDetails);
router.post("/user", UserCreate);
router.patch("/user/:id", UserUpdate);
router.delete("/user/:id", UserDelete);
router.get("/stations", StationsAll);
router.get("/station/:id", StationDetails);
router.post("/station", StationCreate);
router.patch("/station/:id", StationUpdate);
router.delete("/station/:id", StationDelete);
router.get("/routes", RoutesAll);
router.get("/route/:id", RouteDetails);
router.post("/route", RouteCreate);
router.patch("/route/:id", RouteUpdate);
router.delete("/route/:id", RouteDelete);
router.get("/trains", TrainsAll);
router.get("/train/:id", TrainDetails);
router.post("/train", TrainCreate);
router.patch("/train/:id", TrainUpdate);
router.delete("/train/:id", TrainDelete);
router.get("/transactions", TransactionsAll);
router.get("/transaction/:id", TransactionDetails);
router.post("/transaction", TransactionCreate);
router.patch("/transaction/:id", TransactionUpdate);
router.delete("/transaction/:id", TransactionDelete);
//Bikin Pusing
router.post("/search-tickets", RoutesSearch);

router.post("/payment-upload/:id", UploadPayment);
router.post("/order", AddOrder);
router.get("/my-tickets", auth, GetMyTickets);
module.exports = router;
