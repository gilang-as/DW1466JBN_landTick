const models = require("../models");
const jwt = require("jsonwebtoken");
const TransactionModel = models.transaction;
const UserModel = models.user;
const RouteModel = models.route;
const TrainModel = models.train;
const StationModel = models.station;
const IdentityModel = models.identity;

const udahlah = require("../models_mysql/db_config");

exports.RoutesSearch = (req, res) => {
  const {
    date_start,
    starting_point,
    destination,
    date_back,
    round_trip
  } = req.body;

  // console.log(req.body);

  const query1 = `SELECT t1.id, t1.price, t1.starting_point, t1.destination, t1.start_time, t1.arrived, t2.name AS train_name, t2.category AS train_category, t2.seats AS train_seats, (t2.seats - X.a) AS remaining_seats, t4.name AS station_start, t5.name AS station_destination FROM routes t1 INNER JOIN trains t2 ON t1.train_id = t2.id LEFT JOIN( SELECT SUM(t3.total) AS a, t3.route_id FROM transactions t3 WHERE t3.date LIKE '${date_start}%' GROUP BY t3.route_id ) X ON X.route_id = t1.id INNER JOIN stations t4 ON t1.starting_point = t4.id INNER JOIN stations t5 ON t1.destination = t5.id WHERE t1.starting_point = ${starting_point} AND t1.destination = ${destination}`;

  const query2 = `SELECT t1.id, t1.price, t1.starting_point, t1.destination, t1.start_time, t1.arrived, t2.name AS train_name, t2.category AS train_category, t2.seats AS train_seats, (t2.seats - X.a) AS remaining_seats, t4.name AS station_start, t5.name AS station_destination FROM routes t1 INNER JOIN trains t2 ON t1.train_id = t2.id LEFT JOIN( SELECT SUM(t3.total) AS a, t3.route_id FROM transactions t3 WHERE t3.date LIKE '${date_start}%' GROUP BY t3.route_id ) X ON X.route_id = t1.id INNER JOIN stations t4 ON t1.starting_point = t4.id INNER JOIN stations t5 ON t1.destination = t5.id WHERE (t1.starting_point = ${starting_point} AND t1.destination = ${destination}) OR (t1.starting_point = ${destination} AND t1.destination = ${starting_point})`;

  udahlah.query(
    round_trip && date_back === null ? query2 : query1,
    (err, Route) => {
      if (err) throw err;

      res.status(200).send({
        status: true,
        message: "Success Get Routes",
        data: Route
      });
    }
  );
};

exports.GetMyTickets = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const { user_id } = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const User = await TransactionModel.findAll({
      include: [
        {
          model: UserModel,
          as: "user",
          attributes: [
            "name",
            "username",
            "email",
            "gender",
            "phone",
            "address"
          ]
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
          attributes: { exclude: ["train_id", "starting_point", "destination"] }
        },
        {
          model: IdentityModel,
          as: "identity"
        }
      ],
      attributes: { exclude: ["id_ticket", "id_user"] },
      where: { user_id }
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
