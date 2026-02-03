import nodemailer from "nodemailer";

export const sendEmail = async (to) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "YOUR_EMAIL@gmail.com",
      pass: "APP_PASSWORD_HERE",
    },
  });

  await transporter.sendMail({
    from: "Node App",
    to,
    subject: "Welcome",
    text: "Welcome to our app",
  });
};

