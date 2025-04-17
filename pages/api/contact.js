//https://github.com/datopian/portal-ni/blob/main/pages/api/contact.ts
import nodemailer from 'nodemailer';
import getConfig from 'next/config';

export default async (req, res) => {
  const { name, rtype, email, message } = req.body;
  const {
    MAIL_PORT,
    MAIL_SERVER,
    MAIL_ACCOUNT,
    MAIL_PASSWORD,
    CONTACT_EMAIL,
    REQUEST_DATA_EMAIL,
  } = getConfig().serverRuntimeConfig;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  try {

    console.log("MAIL_SERVER, MAIL_ACCOUNT, MAIL_PASSWORD", MAIL_SERVER, MAIL_ACCOUNT, MAIL_PASSWORD)
    const transporter = nodemailer.createTransport({
      port: MAIL_PORT,
      host: MAIL_SERVER,
      auth: {
        user: MAIL_ACCOUNT,
        pass: MAIL_PASSWORD,
      },
      secure: false,
      connectionTimeout: 100 * 1000,
    });

    const mailData = {
      from: email,
      to: `${rtype ? REQUEST_DATA_EMAIL : CONTACT_EMAIL}`,
      subject: `${
        rtype ? 'Request Dataset' : 'Inquiry'
      } - ${'bayanat.ae open portal'}`,
      text: `Name of Sender: ${name}\n\nEmail of Sender: ${email}\n\n\nDetails/Content: ${message}`,
    };

    console.log(mailData);

    transporter.sendMail(mailData, function (err, info) {
      console.log('Email sent');
      if (err) {
        console.log(err);
        return res.status(400).send({
          error: `There was an error sending this email, please contact us at `,
        });
      } else {
        return res.status(200).send();
      }
    });
  } catch (error) {
    return res.status(500).send({ error: error.message || error.toString() });
  }
};
