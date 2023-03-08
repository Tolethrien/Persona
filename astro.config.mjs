import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      port: 3000,
      open: true
    }
  },
  integrations: [react()]
});