import { NextResponse } from 'next/server';
import { createClient } from '@/utils/middleware';

export async function middleware(request) {
	const { supabase, response } = createClient(request);

	// Refresh session if expired - required for Server Components
	// https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
	await supabase.auth.getSession();

	return response;
}
