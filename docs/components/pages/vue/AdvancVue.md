# 进阶

## vite 设置@基础路径

- 安装环境 npm install @types/node --save-dev
- 配置 vite.congfig.ts

```ts
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

- 配置 tsconfig.json

```json
"baseUrl": ".",
"paths": {
    "@/*":["src/*"]
}
```
