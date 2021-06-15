const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const passwordAuthentication = (
  password,
  userPassword,
  id,
  email,
  name,
  res
) => {
  bcrypt.compare(password, userPassword, function (err, result) {
    if (err) {
      return res.json({ message: "something is wrong" });
    }
    if (result) {
      const token = jwt.sign(
        {
          userEmail: email,
          userId: id,
        },
        "7vuz7pRy/hG8mTJlMXRcLnM38xGXFgNVuYAGYJTI1oqQFhSQFIHaRxu8pw453yJYP2juEit8pA8lDTvMNRtSQBM4RdzxOdpIX+cPrUCz9WSCnjqjIvCfXPGoqGJQl6REedrZUn95dySTu+G+vgtZK1ZHR8Cy7BcOCSg0jDpqBXVkx+wKMyHGtSlaLb1t+fqPmS+6MGW08CM4lqS9RdDcdAmAZ8lDL5WG/36Gas+04I0FXkchGv5UNcvbUfuFp/MzVsW12B8FJr6gRNNiPNEEEMSqBuhr8HU6kUHJvYiay6E3ah7pm5yVLIbIJ1XmfKsAP7GmBzg+2xwYayLJup2+Zw==",
        { expiresIn: "24h" }
      );

      return res.status(200).json({
        success: true,
        message: "login successful",
        token,
        userName: name,
      });
    } else {
      return res.status(400).json({ message: "authentication failed" });
    }
  });
};

module.exports = { passwordAuthentication };
