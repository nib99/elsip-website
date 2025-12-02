import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request) {
  try {
    const data = await request.json();
    const worker = await prisma.worker.create({
      data: {
        ...data,
        skills: data.skills ? data.skills.split(',').map(s => s.trim()) : []
      }
    });
    return NextResponse.json({ success: true, workerId: worker.id });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

