import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/products", destination: "/dashboard/products", permanent: true },
      { source: "/inventory", destination: "/dashboard/inventory", permanent: true },
      { source: "/sales", destination: "/dashboard/sales", permanent: true },
      { source: "/customers", destination: "/dashboard/customers", permanent: true },
    ];
  },
};

export default nextConfig;
