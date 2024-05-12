/* eslint-disable no-console */
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const admin = process.env.GMAIL_FROM;

export async function POST(request) {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const phone = data.get('phone');
  const message = data.get('message');
  const service = data.get('service');

  console.log('Name is', name);
  console.log('Email is', email);
  console.log('Phone is', phone);

  const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'contact@gregoryperson.com',
      pass: 'Sev5862470',
    },
  });
  try {
    await transporter.sendMail({
      from: `contact@gregoryperson.com`, // sender address
      to: `${admin}`, // list of receivers
      subject: `Nouveau message de ${name}`, // Subject line
      text: JSON.stringify(message), // plain text body
      html: (
        <div>
          <span className='text-3xl font-bold'>Message :</span>{' '}
          <div className='rounded-xl bg-slate-400 p-8'>{message}</div>
        </div>
      ),
    });
    await transporter.sendMail({
      from: `contact@gregoryperson.com`, // sender address
      to: `${email}`, // list of receivers
      subject: `Nouveau message de ${name}`, // Subject line
      text: JSON.stringify(message), // plain text body
      html: (
        <div>
          <h1 className='text-3xl font-bold'>Bonjour {name},</h1>
          <br /> j'ai bien reçu votre demande de devis pour le service :
          {service}.
          <br /> Je reviens vers vous dans les plus brefs délais.
          <br /> Je vous remercie de votre confiance.
        </div>
      ),
    });
    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500 });
  }
}
