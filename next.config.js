/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ohbooydiagfwqvzvohfc.supabase.co',
				pathname: '**',
			},
		],
	},
};

module.exports = nextConfig;
