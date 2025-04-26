module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    optimizeCss: true, // enabling this will enable SSR for Tailwind
  };
  return nextConfig;
};
