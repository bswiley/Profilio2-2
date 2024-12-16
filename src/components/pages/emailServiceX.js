export default async function email(name, emailAddress, message) {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "bswprofilio@gmail.com",
      pass: "yxyw ahoy xyqa rbcz",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${emailAddress}>`,
      to: "bswiley@gmail.com",
      subject: "New Message from Profile Website",
      text: `${name} with email address of ${emailAddress} sent the following message:\n\n${message}`,
    });

    console.log("Email sent: ", info);
    return info;
  } catch (error) {
    console.error("Error sending email: ", error);
    throw new Error("Error sending email");
  }
}