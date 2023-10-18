/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Add a rule for handling video files
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/videos/",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
