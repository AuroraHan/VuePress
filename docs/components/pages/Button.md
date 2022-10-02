# 理解scoped、>>>、/deep/、::v-deep的原理
## Scoped CSS的原理
无设置Scoped与设置Scoped的区别在哪？

1、无设置Scoped。打包之后的结果是跟我们的代码一摸一样的，没有区别。

2、设置Scoped。多了一个data-v-hash属性，给一个组件中的所有dom添加了一个独一无二的动态属性，然后，给CSS选择器额外添加一个对应的属性选择器来选择该组件中dom，这种做法使得样式只作用于含有该属性的dom——组件内部dom，可以使得组件之间的样式不互相污染。



# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```vue
<template>
  <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
</template>
```

:::
