var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "tuandvph31763@fpt.edu.vn",
        pass: "tuandz123"
    }
});
module.exports = transporter 