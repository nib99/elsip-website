import { NextResponse } from 'next/server';
import { createToken } from '@/lib/auth';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (email === 'admin@elsip.gov.et' && password === 'MoLS2025!') {
      const token = createToken({ role: 'admin', email });
      return NextResponse.json(token);
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

