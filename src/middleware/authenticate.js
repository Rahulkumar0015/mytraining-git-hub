const jwt = require("jsonwebtoken");
//const blogModel = require("../models/blogModel");

const authentication = function (req, res, next) {
  try {
    let token = req.headers["x-Api-key"];
    if (!token) token = req.headers["x-api-key"];
    if (!token)
      return res
        .status(403)
        .send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "Project1-gp39");
    if (!decodedToken)
      return res.status(403).send({ status: false, msg: "InValid token" });
    req.putAuthorId = decodedToken.authorId;
    console.log(req.putAuthorId)

    next();
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};

module.exports.authentication = authentication;

