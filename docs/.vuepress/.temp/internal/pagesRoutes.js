import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-1020f180","/components/",{"title":"Hi~ 2323"},["/components/index.html","/components/README.md"]],
  ["v-b959d088","/components/pages/Button.html",{"title":""},["/components/pages/Button","/components/pages/Button.md"]],
  ["v-5d612751","/components/pages/InputNumber.html",{"title":"Input 输入"},["/components/pages/InputNumber","/components/pages/InputNumber.md"]],
  ["v-08bf7b6d","/components/pages/Slider.html",{"title":"Hello Slider"},["/components/pages/Slider","/components/pages/Slider.md"]],
  ["v-5851f53c","/document/tips/",{"title":"Hello Tips"},["/document/tips/index.html","/document/tips/README.md"]],
  ["v-7d85779a","/document/introduction/",{"title":"Hello Introduction"},["/document/introduction/index.html","/document/introduction/README.md"]],
  ["v-38f5cd79","/components/pages/algorithm/lodash.html",{"title":"Lodash"},["/components/pages/algorithm/lodash","/components/pages/algorithm/lodash.md"]],
  ["v-2320ddaf","/components/pages/git/Git.html",{"title":"Hello Git"},["/components/pages/git/Git","/components/pages/git/Git.md"]],
  ["v-e8921530","/components/pages/javascript/Basejs.html",{"title":"基础知识"},["/components/pages/javascript/Basejs","/components/pages/javascript/Basejs.md"]],
  ["v-55b7d5ec","/components/pages/typescript/Basets.html",{"title":"基础TypeScript"},["/components/pages/typescript/Basets","/components/pages/typescript/Basets.md"]],
  ["v-37f31dd0","/components/pages/vue/Basevue.html",{"title":"Vue 基础"},["/components/pages/vue/Basevue","/components/pages/vue/Basevue.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
