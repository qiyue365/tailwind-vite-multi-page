/** @type {import('vite').UserConfig} */
import path from "path";
export default {
  root: "./src",
  publicDir: "../public",

  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/index.html"),
        user: path.resolve(__dirname, "src/user/index.html"),
        "user/detail": path.resolve(__dirname, "src/user/detail.html"),
      },
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
    },
    outDir: "../dist",
    emptyOutDir: true,
  },
};