export const data = {
  "key": "v-5851f53c",
  "path": "/document/tips/",
  "title": "Hello Tips",
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
  "filePathRelative": "document/tips/README.md"
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
