<template><h1 id="理解scoped、-、-deep-、-v-deep的原理" tabindex="-1"><a class="header-anchor" href="#理解scoped、-、-deep-、-v-deep的原理" aria-hidden="true">#</a> 理解scoped、&gt;&gt;&gt;、/deep/、::v-deep的原理</h1>
<h2 id="scoped-css的原理" tabindex="-1"><a class="header-anchor" href="#scoped-css的原理" aria-hidden="true">#</a> Scoped CSS的原理</h2>
<p>无设置Scoped与设置Scoped的区别在哪？</p>
<p>1、无设置Scoped。打包之后的结果是跟我们的代码一摸一样的，没有区别。</p>
<p>2、设置Scoped。多了一个data-v-hash属性，给一个组件中的所有dom添加了一个独一无二的动态属性，然后，给CSS选择器额外添加一个对应的属性选择器来选择该组件中dom，这种做法使得样式只作用于含有该属性的dom——组件内部dom，可以使得组件之间的样式不互相污染。</p>
<h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">//父组件</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;parent&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">id</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;app&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">h1</span><span style="color: var(--shiki-color-text)">&gt;我是父组件&lt;/</span><span style="color: var(--shiki-token-string-expression)">h1</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;gby&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">p</span><span style="color: var(--shiki-color-text)">&gt;我是一个段落&lt;/</span><span style="color: var(--shiki-token-string-expression)">p</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">child</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">child</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">scoped</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">.parent</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">background-color</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">green</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">.gby</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">p</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">background-color</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">red</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  // 把子组件的背景变成红色，原组件不变</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  ::</span><span style="color: var(--shiki-token-string-expression)">v-deep</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">.child</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">.dyx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">p</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-constant)">background-color</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">red</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">//子组件</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;child&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &lt;</span><span style="color: var(--shiki-token-string-expression)">h1</span><span style="color: var(--shiki-color-text)">&gt;我是子组件&lt;/</span><span style="color: var(--shiki-token-string-expression)">h1</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;dyx&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            &lt;</span><span style="color: var(--shiki-token-string-expression)">p</span><span style="color: var(--shiki-color-text)">&gt;我是子组件的段落&lt;/</span><span style="color: var(--shiki-token-string-expression)">p</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">scoped</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">.child</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">.dyx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">p</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-constant)">background-color</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">blue</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>如果你希望 scoped 样式中的一个选择器能够选择到子组 或 后代组件中的元素，我们可以使用 深度作用选择器，它有三种写法：</p>
<p>1、&gt;&gt;&gt;，示例： .gby div &gt;&gt;&gt; #dyx p</p>
<p>2、/deep/，示例： .gby div /deep/ #dyx p 或 .gby div/deep/ #dyx p</p>
<p>3、::v-deep，示例： .gby div::v-deep #dyx p 或 .gby div::v-deep #dyx p</p>
<h1 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> Button 按钮</h1>
<p>常用的操作按钮。</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>基础的按钮用法。</p>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;a-button type=&quot;primary&quot;&gt;Primary Button&lt;/a-button&gt;
  &lt;a-button&gt;Default Button&lt;/a-button&gt;
  &lt;a-button type=&quot;dashed&quot;&gt;Dashed Button&lt;/a-button&gt;
  &lt;a-button type=&quot;text&quot;&gt;Text Button&lt;/a-button&gt;
  &lt;a-button type=&quot;link&quot;&gt;Link Button&lt;/a-button&gt;
&lt;/template&gt;
"><render-demo-0 />
        <template #description>
          <div>使用<code>type</code>、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)">&gt;Primary Button&lt;/</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)">&gt;Default Button&lt;/</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;dashed&quot;</span><span style="color: var(--shiki-color-text)">&gt;Dashed Button&lt;/</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;text&quot;</span><span style="color: var(--shiki-color-text)">&gt;Text Button&lt;/</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;link&quot;</span><span style="color: var(--shiki-color-text)">&gt;Link Button&lt;/</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo></template>

<script lang="ts">
      import * as Vue from 'vue'
      
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("Primary Button")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("Default Button")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("Dashed Button")
const _hoisted_4 = /*#__PURE__*/_createTextVNode("Text Button")
const _hoisted_5 = /*#__PURE__*/_createTextVNode("Link Button")

function render(_ctx, _cache) {
  const _component_a_button = _resolveComponent("a-button")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_a_button, { type: "primary" }, {
      default: _withCtx(() => [
        _hoisted_1
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_a_button, null, {
      default: _withCtx(() => [
        _hoisted_2
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_a_button, { type: "dashed" }, {
      default: _withCtx(() => [
        _hoisted_3
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_a_button, { type: "text" }, {
      default: _withCtx(() => [
        _hoisted_4
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_a_button, { type: "link" }, {
      default: _withCtx(() => [
        _hoisted_5
      ]),
      _: 1 /* STABLE */
    })
  ], 64 /* STABLE_FRAGMENT */))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
<style></style>