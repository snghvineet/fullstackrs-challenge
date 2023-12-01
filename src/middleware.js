import { NextResponse } from 'next/server';
import { createClient } from '@/utils/middleware';

const protectedRoutes = ['/profile', '/blogs/new', '/blogs/edit/'];

export async function middleware(request) {
	// console.log('In middleware');
	const { supabase, response } = createClient(request);

	// Refresh session if expired - required for Server Components
	// https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
	const {
		data: { session },
	} = await supabase.auth.getSession();

	const pathname = request.nextUrl.pathname;
	const filteredPath = protectedRoutes.filter((path) =>
		pathname.startsWith(path)
	);
	if (!session && filteredPath.length > 0) {
		console.log('redirecting');
		return NextResponse.redirect(new URL('/', request.nextUrl.origin));
	}

	return response;
}
