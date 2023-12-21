import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://api.sendgrid.com/v3/mail', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.SENDGRID_API_KEY,
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}

export async function POST() {
  const res = await fetch('https://api.sendgrid.com/v3/mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.SENDGRID_API_KEY,
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({ time: new Date().toISOString() }),
  });

  const data = await res.json();

  return NextResponse.json(data);
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }
}
