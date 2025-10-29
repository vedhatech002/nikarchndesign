import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // This enables network access
    // You can also specify a specific IP address if needed, e.g., host: '192.168.1.100'
    // port: 5173, // Optional: Specify a custom port, default is 5173
  },
});
