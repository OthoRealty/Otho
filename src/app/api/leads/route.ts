import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, objective, location, message } = body;

    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { error: 'Name and at least one contact method (phone or email) are required.' },
        { status: 400 }
      );
    }

    const leadData = {
      name,
      phone: phone || null,
      email: email || null,
      objective: objective || 'General Inquiry',
      location: location || null,
      message: message || null,
      createdAt: new Date().toISOString(),
      source: 'web_portal',
      status: 'NEW',
    };

    // If Supabase environment variables are present, we can insert into Supabase:
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const { createClient } = await import('@supabase/supabase-js');
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.SUPABASE_SERVICE_ROLE_KEY
        );
        const { error: dbError } = await supabase.from('leads').insert([leadData]);
        if (dbError) {
          console.warn('Supabase lead insertion error:', dbError.message);
        }
      } catch (err) {
        console.warn('Supabase client error:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your advisory request has been received. A senior principal will contact you within 24 hours.',
      lead: leadData,
    });
  } catch (error) {
    console.error('Error handling lead submission:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing your inquiry.' },
      { status: 500 }
    );
  }
}
