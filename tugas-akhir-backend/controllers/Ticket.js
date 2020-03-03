const models = require("../models");
// const jwt = require("jsonwebtoken");
const TicketModel = models.tickets;

exports.GetAllTickets = async (req, res) => {
  try {
    const Tickets = await TicketModel.findAll();
    res.status(200).send({
      status: true,
      message: "Success Get All Tickets",
      data: Tickets
    });
  } catch (err) {
    console.log(err);
  }
};

exports.AddTicket = async (req, res) => {
  try {
    const Ticket = await TicketModel.create(req.body);
    res.status(200).send({
      status: true,
      message: "Success Add New Ticket",
      data: Ticket
    });
  } catch (err) {
    console.log(err);
  }
};

exports.UpdateTicket = async (req, res) => {
  const id = req.params.id;
  try {
    const Ticket = await TicketModel.update(req.body, { where: { id } });
    if (Ticket) {
      res.status(200).send({
        status: true,
        message: "Success Updated a Ticket"
      });
    } else {
      res
        .status(200)
        .send({ message: "Error Updated a Ticket", status: "false" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.DeleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await TicketModel.destroy({ where: { id } });
    if (pet) {
      res
        .status(200)
        .send({ message: "Success Deleted a Ticket", status: "true" });
    } else {
      res
        .status(200)
        .send({ message: "Error Deleted a Ticket", status: "false" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.DetailTicket = async (req, res) => {
  const { id } = req.params;
  try {
    const Ticket = await TicketModel.findOne({
      where: { id }
    });
    res.status(200).send({
      status: true,
      message: "Success Updated a Ticket",
      data: Ticket
    });
  } catch (err) {
    console.log(err);
  }
};
