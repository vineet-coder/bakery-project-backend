var jwt = require("jsonwebtoken");

function AuthVerify(req, res, next) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, "7vuz7pRy/hG8mTJlMXRcLnM38xGXFgNVuYAGYJTI1oqQFhSQFIHaRxu8pw453yJYP2juEit8pA8lDTvMNRtSQBM4RdzxOdpIX+cPrUCz9WSCnjqjIvCfXPGoqGJQl6REedrZUn95dySTu+G+vgtZK1ZHR8Cy7BcOCSg0jDpqBXVkx+wKMyHGtSlaLb1t+fqPmS+6MGW08CM4lqS9RdDcdAmAZ8lDL5WG/36Gas+04I0FXkchGv5UNcvbUfuFp/MzVsW12B8FJr6gRNNiPNEEEMSqBuhr8HU6kUHJvYiay6E3ah7pm5yVLIbIJ1XmfKsAP7GmBzg+2xwYayLJup2+Zw==");
    req.user = {
      userId: decoded.userId,
      userEmail: decoded.userEmail,
    };
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid Token" });
  }
}

module.exports = AuthVerify;
