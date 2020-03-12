const multer = require("multer");
const jwt = require("jsonwebtoken");
const models = require("../models");
const TransactionModel = models.transaction;

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage: storage }).single("file");

exports.UploadPayment = async (req, res) => {
  const { id } = req.params;
  try {
    const File = upload(req, res, err => {
      if (err || !req.file) {
        console.log(err);
      }
      TransactionModel.update(
        { attactement: req.file.filename },
        {
          where: { id }
        }
      );
      res.status(200).send({
        status: true,
        message: "Success Upload",
        data: File
      });
    });
  } catch (err) {
    // console.log(err);
    res.status(400).send({
      message: "an error occured"
    });
  }
};
