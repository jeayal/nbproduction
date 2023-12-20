import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ hello: 'Next.js' });
}
/* eslint-disable  @typescript-eslint/no-explicit-any */

export async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'INVALID_METHOD' });
    return;
  }
}
