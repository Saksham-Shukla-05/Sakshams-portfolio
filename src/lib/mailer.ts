import nodemailer from "nodemailer";

console.log(process.env.USER_MAIL, process.env.USER_PASS);

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.USER_PASS,
  },
});
