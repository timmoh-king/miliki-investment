const { verify } = require('jsonwebtoken');

module.exports = {
    authMiddleware: (req, res, next) => {
        let token = req.header('x-auth-token');

        if (!token) return res.status(401).json({ errored: true, error: "Access denied. No Authorization provided" });

        try {
            const data = verify(token, process.env.SECRET_KEY)
            req.user = data;
            next();
        } catch (error) {
            res.status(400).json({ message: "Invalid access token" })
        }
    }
}