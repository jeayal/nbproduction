import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ hello: 'Next.js' });
}

export async function HEAD() {
  return NextResponse.json({ hello: 'Next.js' });
}

export async function POST() {
  return NextResponse.json({ hello: 'Next.js' });
}

export async function PUT() {
  return NextResponse.json({ hello: 'Next.js' });
}

export async function DELETE() {
  return NextResponse.json({ hello: 'Next.js' });
}

export async function PATCH() {
  return NextResponse.json({ hello: 'Next.js' });
}
