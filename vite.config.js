import { createHtmlPlugin } from "vite-plugin-html";
import viteImagemin from "vite-plugin-imagemin";

export default {
  base: "./",
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
    viteImagemin(),
  ],
};
