const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;
    if (!name || !email || !msg) {
      return res.status(400).json({
        success: false,
        message: "Provide all the fields",
      });
    }

    await transporter.sendMail({
      to: 'jindal10dhruv@gmail.com',
      from: 'jindal10dhruv@gmail.com',
      subject: "Regarding my portfolio",
      html: `<h1>Contact Form Submission</h1>
              <ul>
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>
                <li>Message: ${msg}</li>
              </ul>`,
    });

    return res.status(200).json({
      success: true,
      message: "Email Sent Successfully",
    });
  } catch (error) {
    console.error("Send Email API Error:", error);
    return res.status(500).json({
      success: false,
      message: "Send Email API Error",
      error: error.message || error,
    });
  }
};

module.exports = { sendEmailController };
