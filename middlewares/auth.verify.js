var jwt = require("jsonwebtoken");

function AuthVerify(req, res, next) {
  const token = req.headers.authorization;
console.log(process.env.REACT_APP_SECRET_KEY)
  try {
    const decoded = jwt.verify(token, process.env.REACT_APP_SECRET_KEY);
    req.user = {
      userId: decoded.userId,
      userEmail: decoded.userEmail,
    };
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "Invalid Token" });
  }
}

module.exports = AuthVerify;
