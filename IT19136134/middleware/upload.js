const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //location where the file will save
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    //getting the original filename
    let ext = path.extname(file.originalname);
    //renaming the file with the current timestamp and the files original name
    //to make it unique
    cb(null, Date.now() + ext);
  },
});

var upload = multer({
  storage: storage,
  //validating the file type
  fileFilter: function (req, file, callback) {
    if (
      file.mimetype == "application/pdf" ||
      file.mimetype == "application/vnd.ms-powerpoint" ||
      file.mimetype ==
        "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ) {
      callback(null, true);
    } else {
      console.log("only pdf && ppt files are supported");
      callback(null, false);
    }
  },
  //supports only 2mb sized files
  limits: { fileSize: 1024 * 1024 * 10 },
});

module.exports = upload;
