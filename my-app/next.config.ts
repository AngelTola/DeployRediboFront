import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Asegúrate de que se utilice el output correcto para despliegue
  output: 'standalone',
};

export default nextConfig;