import nodemailer from "nodemailer";
// email configuration and send email
const emailProcesser = async (emailBody) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "raul22@ethereal.email",
        pass: "mPcNNvzZCarDmT7uTC",
      },
    });

    await transporter.sendMail(emailBody);
  } catch (error) {
    console.log(error);
  }
};

export const sendMail = (emailData) => {
  const emailBody = {
    from: '"PraveenStore 👻" <myemail@praveenstore.com>', // sender address
    to: emailData.email, // list of receivers
    subject: "Hello ✔ test User Praveen", // Subject line
    text: `Hi Test User Praveen, you have to verify yopur email, please follow link to verify EMail: ${emailData.url}`, // plain text body
    html: `<p>Hi Test User Praveen</p>
    "<p>Hi ${emailData.url}</p>"`, // html body
  };
  emailProcesser(emailBody);
};
