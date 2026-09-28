import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // আপনার ইমেজের ওয়েবসাইট/ডোমেইন নাম লিখুন (যেমন: images.unsplash.com)
        port: '',
      },
    ],
  },
};

export default nextConfig;
