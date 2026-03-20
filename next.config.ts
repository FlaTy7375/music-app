import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compiler: {
    // Включаем поддержку styled-components
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: false,
      topLevelImportPaths: [],
      meaninglessFileNames: ['index'],
      cssProp: true,
    },
  },
};

export default nextConfig;
