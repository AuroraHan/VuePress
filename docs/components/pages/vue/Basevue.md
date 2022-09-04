# Vue 基础

### watch
 watch 的第一个参数可以是不同形式的“数据源”：它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组
 ```vue
    const x = ref(0)
    const y = ref(0)

// 单个 ref
    watch(x, (newX) => {
    console.log(`x is ${newX}`)
    })

// getter 函数
    watch(
    () => x.value + y.value,
    (sum) => {
        console.log(`sum of x + y is: ${sum}`)
    }
    )

// 多个来源组成的数组
    watch([x, () => y.value], ([newX, newY]) => {
    console.log(`x is ${newX} and y is ${newY}`)
    })
 ```

### watchEffect 
 - 不需要指定监听属性，自动收集依赖，只要在回调中引用到了响应式的属性，只要这些属性发生改变，回调就会执行
 ```vue

    const user = reactive({
        name: 'tom',
    })
    watchEffect(()=>{
        console.log(user.name)
    })
 ```