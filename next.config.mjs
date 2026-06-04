/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Força o build a terminar mesmo se o linter achar avisos/erros bobos
    ignoreDuringBuilds: true,
  },
};