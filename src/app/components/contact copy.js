import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'gregory@shortlyagency.com', // Change to your recipient
  from: 'gregory@shortlyagency.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
/* eslint-disable no-console */
sgMail
  .send(msg)
  .then(() => {
    console.log('Email envoyé');
  })
  .catch((error) => {
    console.error(error);
  });
