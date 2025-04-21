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
      requireTLS: true, // Enforces STARTTLS
      tls: {
        ciphers: 'SSLv3',
      },
    });

    const mailData = {
      from: email,
      to: `${rtype ? REQUEST_DATA_EMAIL : CONTACT_EMAIL}`,
      subject: `${
        rtype ? 'Request Dataset' : 'Inquiry'
      } - ${'bayanat.ae open portal'}`,
      text: `Name of Sender: ${name}\n\nEmail of Sender: ${email}\n\n\nDetails/Content: ${message}`,
    };

  
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          return reject(err);
        } else {
          console.log('Email sent', info);
          return resolve(info);
        }
      });
    });
    return res.status(200).send({ success: true });
  } catch (error) {
    return res.status(500).send({ error: error.message || error.toString() });
  }
};
