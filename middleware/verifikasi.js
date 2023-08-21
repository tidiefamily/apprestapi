const jwt = require("jsonwebtoken");
const config = require("../config/secret");

function verifikasi(roles) {
  return function (req, res, next) {
    //cek authorizzation header
    var tokenWithBearer = req.header.authorization;
    if (tokenWithBearer) {
      var token = tokenWithBearer.split("")[1];
      //verifikasi
      jwt.verify(token, config.secret, function (error, decode) {
        if (error) {
          return rest
            .status(401)
            .send({ auth: false, message: "Token tidak terdaftar" });
        } else {
          if (roles == 2) {
            res.auth = decode;
            next();
          } else {
            return rest
              .status(401)
              .send({ auth: false, message: "Gagal mengotorisasi role anda" });
          }
        }
      });
    } else {
      return rest
        .status(401)
        .send({ auth: false, message: "Token tidak tersedia" });
    }
  };
}

module.exports = verifikasi;
