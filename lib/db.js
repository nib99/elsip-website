import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyToken } from '@/lib/auth';

export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!verifyToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const [workers, jobs, inspections] = await Promise.all([
      prisma.worker.count(),
      prisma.job.count(),
      prisma.inspection.count()
    ]);

    return NextResponse.json({
      workers,
      jobs,
      inspections,
      matchRate: 92,
      certificates: 1500
    });
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

