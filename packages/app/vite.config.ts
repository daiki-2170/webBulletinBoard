import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// このモジュールのファイルパスを取得する
const filePath = new URL(import.meta.url).pathname;

// パスの文字列からファイルパスを取得する
const __dirname = decodeURIComponent(filePath);

console.log(__dirname);

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    host: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "src/": path.resolve(__dirname, "./src"),
    },
  },
});
