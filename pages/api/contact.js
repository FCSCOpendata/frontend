//https://github.com/datopian/portal-ni/blob/main/pages/api/contact.ts
import nodemailer from 'nodemailer';
import getConfig from 'next/config';

export default async (req, res) => {
  const { name, email, message } = req.body;
  const { MAIL_ACCOUNT, MAIL_PASSWORD, CONTACT_EMAIL } =
    getConfig().serverRuntimeConfig;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: MAIL_ACCOUNT,
        pass: MAIL_PASSWORD,
      },
    });

    const mailData = {
      from: email,
      to: CONTACT_EMAIL,
      subject: `Inquiry - ${'bayanate.ae open portal'}`,
      text: message,
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
