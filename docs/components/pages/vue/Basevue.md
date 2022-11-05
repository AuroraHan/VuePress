# Vue 基础

### $attrs 的几种用法

一个包含了组件所有透传 attributes 的对象。由父组件传入，且没有被子组件声明为 props 或是组件自定义事件的 attributes 和事件处理函数。

**注:**
默认情况下，若是单一根节点组件，$attrs 中的所有属性都是直接自动继承自组件的根元素。而多根节点组件则不会如此，同时你也可以通过配置 inheritAttrs 选项来显式地关闭该行为。

关键字：

- $attrs：在 template 中使用（单一根元素和多个根元素的情况）
- useAttrs：在 js 中使用（1 种 Options API 和 2 种 Composition API 的用法）

```vue
<script>
//Options API
mounted() { console.log(this.$attrs) }
//Composition API标签中无
setup setup(props, context)
 { console.log('props: ', props)
  console.log('attrs:', context.attrs) }

//Composition API
import { useAttrs } from 'vue'
const attrs= useAttrs()
console.log('props: ', props)
console.log('attrs: ', attrs)
<script>

```

### ref 与 reactive 区别

ref 支持所有类型 reactive 支持应用类型 数组，对象 map，set

ref 取值，赋值都需要.value reactive 不需要.value

reactive 不能直接赋值，否则破坏响应式对象

解决方法：数组可以使用 push 对象可以进行解构 添加一个对象，把数组作为一个属性去解决

### style v-bind

style 中使用 v-bind 将 span 变成红色

```vue
<template>
  <span> 有开始循环了-开端 </span>
</template>
<script setup>
import { reactive } from "vue";
const state = reactive({
  color: "red",
});
</script>
<style scoped>
span {
  /* 使用v-bind绑定state中的变量 */
  color: v-bind("state.color");
}
</style>
```

### watch

watch 的第一个参数可以是不同形式的“数据源”：它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组

```vue
const x = ref(0) const y = ref(0) // 单个 ref watch(x, (newX) => {
console.log(`x is ${newX}`) }) // getter 函数 watch( () => x.value + y.value,
(sum) => { console.log(`sum of x + y is: ${sum}`) } ) // 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => { console.log(`x is ${newX} and y is
${newY}`) })
```

### watchEffect

- 不需要指定监听属性，自动收集依赖，只要在回调中引用到了响应式的属性，只要这些属性发生改变，回调就会执行

```vue
const user = reactive({ name: 'tom', }) watchEffect(()=>{ console.log(user.name)
})
```
