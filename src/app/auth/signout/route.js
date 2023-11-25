import { createClient } from '@/utils/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req) {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	// Check if we have a session
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (session) {
		await supabase.auth.signOut();
	}

	return NextResponse.redirect(
		new URL('/auth/login?message=You have successfully signed out.', req.url),
		{}
	);
}
