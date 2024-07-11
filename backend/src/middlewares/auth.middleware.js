const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/constants");

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ msg: "Please Login First" });  
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        req.role = decoded.userRole;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ msg: "Token has expired" });
        }
        if (error.name === "JsonWebTokenError") {
            return res.status(400).json({ msg: "Invalid Token" });
        }
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

module.exports = auth;
