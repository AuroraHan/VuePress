import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("InputNumber", defineAsyncComponent(() => import("D:/file/Web/UI-Vuepress2.0/docs/.vuepress/components/InputNumber.vue")))
}
