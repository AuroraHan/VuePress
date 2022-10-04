# 理解scoped、>>>、/deep/、::v-deep的原理
## Scoped CSS的原理
无设置Scoped与设置Scoped的区别在哪？

1、无设置Scoped。打包之后的结果是跟我们的代码一摸一样的，没有区别。

2、设置Scoped。多了一个data-v-hash属性，给一个组件中的所有dom添加了一个独一无二的动态属性，然后，给CSS选择器额外添加一个对应的属性选择器来选择该组件中dom，这种做法使得样式只作用于含有该属性的dom——组件内部dom，可以使得组件之间的样式不互相污染。

## 例子
```vue
//父组件
<template>
  <div class="parent" id="app">
    <h1>我是父组件</h1>
    <div class="gby">
      <p>我是一个段落</p>
    </div>

    <child></child>
  </div>
</template>

<style scoped>
  .parent {
    background-color: green;
  }

  .gby p {
    background-color: red;
  }
  // 把子组件的背景变成红色，原组件不变
  ::v-deep .child .dyx p {
    background-color: red;
  }
</style>

```

```vue
//子组件
<template>
    <div class="child">
        <h1>我是子组件</h1>
        <div class="dyx">
            <p>我是子组件的段落</p>
        </div>
    </div>
</template>

<style scoped>
    .child .dyx p {
        background-color: blue;
    }
</style>
```
如果你希望 scoped 样式中的一个选择器能够选择到子组 或 后代组件中的元素，我们可以使用 深度作用选择器，它有三种写法：

1、>>>，示例： .gby div >>> #dyx p

2、/deep/，示例： .gby div /deep/ #dyx p 或 .gby div/deep/ #dyx p

3、::v-deep，示例： .gby div::v-deep #dyx p 或 .gby div::v-deep #dyx p



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
