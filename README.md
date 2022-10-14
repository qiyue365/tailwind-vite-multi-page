# 使用 vite 构建 tailwindcss 多页面应用

## 创建项目

```bash
yarn create vite
```

## 安装依赖

```bash
yarn add -D tailwindcss postcss autoprefixer
```

## 初始化 tailwindcss 配置

```bash
npx tailwindcss init -p
```

## 配置 tailwindcss

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 配置 vite

> `vite.config.js`

```js
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
```

## 目录和文件

```bash
mkdir -p src && \
mv index.html src/ && \
mv main.js src/ && \
mv style.css src/ && \
rm javascript.svg && \
rm counter.js && \
mkdir src/user && \
touch src/user/index.html && \
touch src/user/index.js && \
touch src/user/detail.html && \
touch src/user/detail.js && \
cat > src/style.css << EOF
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF
```
