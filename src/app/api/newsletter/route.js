/* eslint-disable no-console */
import { render } from '@react-email/render';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import NewsletterCustomer from '../../email/newsletter';
const adminEmail = process.env.EMAIL;
const adminPassword = process.env.EMAIL_PASSWORD;

export async function POST(request) {
  const data = await request.formData();
  const email = data.get('email');

  const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: adminEmail,
      pass: adminPassword,
    },
  });

  const emailHtml = render(<NewsletterCustomer email={email} />, {
    pretty: true,
  });

  const admin = {
    from: `${adminEmail}`,
    to: `${adminEmail}`,
    subject: `Demande de newsletter pour ${email}`,
    text: JSON.stringify(email),
    html: `
      <div className='justify-center max-w-[600px]'>
        <span className='text-3xl font-bold'>Inscription newsletter demandée pour :</span>
        <div className='rounded-xl bg-slate-400 p-8'>${email}</div>
      </div>
      `,
  };

  const customer = {
    from: `${adminEmail}`,
    to: `${email}`,
    subject: `NBProduction - Votre inscription à la newsletter est active !`,
    text: JSON.stringify(email),
    html: emailHtml,

    // html: `
    //   <div>
    //     <h1 className='text-2xl font-bold'>Bonjour ${name},</h1>
    //     <br /> J'ai bien reçu votre demande de devis pour le service : ${service}.
    //     <br /> Je reviens vers vous dans les plus brefs délais.
    //     <br /> Je vous remercie de votre confiance. - Nicolas Blanc
    //   </div>
    //   `,
  };
  try {
    await Promise.all(
      [transporter.sendMail(admin), transporter.sendMail(customer)],
      (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Message sent: %s', info.messageId);
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
          return NextResponse.json({ status: 200 });
        }
      }
    );
    // console.log(NextResponse.json);
    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log('Error:', err);
    return NextResponse.json({ status: 500 });
  }
}
