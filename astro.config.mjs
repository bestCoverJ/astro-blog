// @ts-check
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import markdoc from "@astrojs/markdoc";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), markdoc(), tailwind()],
});
