"user strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (res, res) {
  response.ok("Aplikasi Rest Api ku berjalan");
};
