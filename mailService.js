const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "osmmediaplatform@gmail.com",
    pass: "hedlmyebhqjwpckg",
  },
});

const mailService = {
  sendMail: async function (toMail, mailContent) {
    await transporter.sendMail({
      from: `"Abhishek GUPTA" <osmmediaplatform@gmail.com>`,
      to: toMail,
      subject: "OTP from nearMed",
      html: `<h1>OTP:${mailContent}</h1>`,
    });
    return 200;
  },
};

module.exports = mailService;