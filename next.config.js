export default {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com',
        pathname: '/media/launcher_images/**',
      },
      {
        protocol: 'https',
        hostname: 'spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com',
        pathname: '/media/launch_images/**',
      },
    ],
  },
};
