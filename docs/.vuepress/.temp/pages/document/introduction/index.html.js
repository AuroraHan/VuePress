export const data = {
  "key": "v-7d85779a",
  "path": "/document/introduction/",
  "title": "Hello Introduction",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1662179265000,
    "contributors": [
      {
        "name": "AuroraHan",
        "email": "1224195854@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "document/introduction/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
