// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password"
  }
});

app.post("/send-email", (req, res) => {
  const { name, contact, address, selectedService } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "ranjan.bastia1992@gmail.com",
    subject: "Appointment Booking",
    text: `
      Name: ${name}
      Contact: ${contact}
      Address: ${address}
      Services: ${selectedService}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
