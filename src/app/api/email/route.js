/* eslint-disable no-console */
import { render } from '@react-email/render';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { siteConfig } from '@/constant/config';

import EmailAdmin from '../../email/emailAdmin';
import EmailCustomer from '../../email/emailCustomer';

const adminEmail = process.env.EMAIL;
const adminPassword = process.env.EMAIL_PASSWORD;
const adminEmailReceiver = process.env.ADMIN_EMAIL;

export async function POST(request) {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const phone = data.get('phone');
  const message = data.get('message');
  const service = data.get('service');

  // console.log('Name is', name);
  // console.log('Email is', email);
  // console.log('Phone is', phone);

  const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: adminEmail,
      pass: adminPassword,
    },
  });

  const emailHtml = render(
    <EmailCustomer
      url={siteConfig.url}
      name={name}
      phone={phone}
      email={email}
      service={service}
      message={message}
    />,
    {
      pretty: true,
    }
  );

  const emailAdmin = render(
    <EmailAdmin
      url={siteConfig.url}
      name={name}
      phone={phone}
      email={email}
      service={service}
      message={message}
    />,
    {
      pretty: true,
    }
  );

  const admin = {
    from: `${adminEmail}`,
    to: `${adminEmailReceiver}`,
    subject: `Nouvelle demande de devis de ${name}`,
    text: JSON.stringify(message),
    html: emailAdmin,
    // `
    //   <div className='justify-center max-w-[600px]'>
    //     <span className='text-3xl font-bold'>Message :</span>
    //     <div className='rounded-xl bg-slate-400 p-8'>${message}</div>
    //   </div>
    //   `,
  };

  const customer = {
    from: `${adminEmail}`,
    to: `${email}`,
    subject: `NBProduction - Votre demande de devis a bien été prise en compte`,
    text: JSON.stringify(message),
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
