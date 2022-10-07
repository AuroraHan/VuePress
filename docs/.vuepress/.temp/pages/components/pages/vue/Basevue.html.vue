<template><h1 id="vue-基础" tabindex="-1"><a class="header-anchor" href="#vue-基础" aria-hidden="true">#</a> Vue 基础</h1>
<h3 id="ref-与-reactive-区别" tabindex="-1"><a class="header-anchor" href="#ref-与-reactive-区别" aria-hidden="true">#</a> ref 与 reactive 区别</h3>
<p>ref 支持所有类型  reactive 支持应用类型 数组，对象 map，set</p>
<p>ref 取值，赋值都需要.value  reactive 不需要.value</p>
<p>reactive 不能直接赋值，否则破坏响应式对象</p>
<p>解决方法：数组可以使用push  对象可以进行解构  添加一个对象，把数组作为一个属性去解决</p>
<h3 id="style-v-bind" tabindex="-1"><a class="header-anchor" href="#style-v-bind" aria-hidden="true">#</a> style v-bind</h3>
<p>style 中使用v-bind将span变成红色</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">span</span><span style="color: var(--shiki-color-text)">&gt; 有开始循环了-开端 &lt;/</span><span style="color: var(--shiki-token-string-expression)">span</span><span style="color: var(--shiki-color-text)">&gt;  </span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">setup</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> { reactive } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vue&#39;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">state</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">reactive</span><span style="color: var(--shiki-color-text)">({</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    color</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;red&#39;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  })</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">scoped</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">span</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">/* 使用v-bind绑定state中的变量 */</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">color</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">v-bind(</span><span style="color: var(--shiki-token-string-expression)">&#39;state.color&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }  </span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h3>
<p>watch 的第一个参数可以是不同形式的“数据源”：它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">   const x = ref(0)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   const y = ref(0)</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">// 单个 ref</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   watch(x, (newX) =&gt; {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   console.log(`x is ${newX}`)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   })</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">// getter 函数</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   watch(</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   () =&gt; x.value + y.value,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   (sum) =&gt; {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">       console.log(`sum of x + y is: ${sum}`)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   )</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">// 多个来源组成的数组</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   watch([x, () =&gt; y.value], ([newX, newY]) =&gt; {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   console.log(`x is ${newX} and y is ${newY}`)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   })</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect" aria-hidden="true">#</a> watchEffect</h3>
<ul>
<li>不需要指定监听属性，自动收集依赖，只要在回调中引用到了响应式的属性，只要这些属性发生改变，回调就会执行</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">   const user = reactive({</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">       name: &#39;tom&#39;,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   })</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   watchEffect(()=&gt;{</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">       console.log(user.name)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   })</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
