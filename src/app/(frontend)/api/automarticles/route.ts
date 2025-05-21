import { AutomArticles } from '@/provider/automarticles';
import { AutomContent } from '@/provider/automarticles/types/types';
import { PayloadServer } from '@/provider/payload';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const response = await new AutomArticles(await new PayloadServer().execute()).execute(
      body as AutomContent
    );

    if (response && typeof response === 'object' && 'message' in response && !response.success) {
      throw new Error(JSON.stringify(response.message));
    }

    return NextResponse.json({ token: process.env.AUTOMARTICLES_TOKEN, response }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: JSON.parse(error.message) }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
