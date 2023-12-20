import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ hello: 'Next.js' });
}

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}
