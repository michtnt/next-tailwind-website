module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    experimental: {
      optimizeCss: true, // enabling this will enable SSR for Tailwind
    },
  };
  return nextConfig;
};
