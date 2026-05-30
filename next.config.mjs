const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Browsers and crawlers request /favicon.ico by default.
      // Next.js serves the icon via app/icon.svg but /favicon.ico returns 404
      // without this redirect, which shows up in Google Search Console.
      {
        source: '/favicon.ico',
        destination: '/icon.svg',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
