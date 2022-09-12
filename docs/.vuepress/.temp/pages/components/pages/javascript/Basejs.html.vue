<template><h1 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h1>
<h2 id="map知识" tabindex="-1"><a class="header-anchor" href="#map知识" aria-hidden="true">#</a> Map知识</h2>
<blockquote>
<p>Map是一组键值对的结构，具有极快的查找速度。</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">介绍</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">new Map()</td>
<td style="text-align:left">创建新的 Map 对象。</td>
</tr>
<tr>
<td style="text-align:left">set()</td>
<td style="text-align:left">为 Map 对象中的键设置值。</td>
</tr>
<tr>
<td style="text-align:left">get()</td>
<td style="text-align:left">获取 Map 对象中键的值。</td>
</tr>
<tr>
<td style="text-align:left">entries()</td>
<td style="text-align:left">返回 Map 对象中键/值对的数组。</td>
</tr>
<tr>
<td style="text-align:left">keys()</td>
<td style="text-align:left">返回 Map 对象中键的数组。</td>
</tr>
<tr>
<td style="text-align:left">values()</td>
<td style="text-align:left">返回 Map 对象中值的数组。</td>
</tr>
<tr>
<td style="text-align:left">clear()</td>
<td style="text-align:left">删除 Map 中的所有元素。</td>
</tr>
<tr>
<td style="text-align:left">delete()</td>
<td style="text-align:left">删除由键指定的元素。</td>
</tr>
<tr>
<td style="text-align:left">has()</td>
<td style="text-align:left">如果键存在，则返回 true。</td>
</tr>
<tr>
<td style="text-align:left">forEach()</td>
<td style="text-align:left">为每个键/值对调用回调。</td>
</tr>
</tbody>
</table>
<p>例子：给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。[使用哈希表存储每个数字和该数字出现的次数。遍历数组即可得到每个数字出现的次数，并更新哈希表，最后遍历哈希表，得到只出现一次的数字。]</p>
<p>如：输入: [2,2,1]
输出: 1</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">singleNumber</span><span style="color: var(--shiki-color-text)">(nums</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">number</span><span style="color: var(--shiki-color-text)">[])</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">number</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">let</span><span style="color: var(--shiki-color-text)"> result;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">//创建一个map</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">let</span><span style="color: var(--shiki-color-text)"> resultMap </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">Map</span><span style="color: var(--shiki-color-text)">();</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">for</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-keyword)">let</span><span style="color: var(--shiki-color-text)"> i</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-color-text)">;i</span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-token-constant)">nums</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">length</span><span style="color: var(--shiki-color-text)">;i</span><span style="color: var(--shiki-token-keyword)">++</span><span style="color: var(--shiki-color-text)">){</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">let</span><span style="color: var(--shiki-color-text)"> count </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">resultMap</span><span style="color: var(--shiki-token-function)">.get</span><span style="color: var(--shiki-color-text)">(nums[i]);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        count </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> count </span><span style="color: var(--shiki-token-keyword)">==</span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-keyword)">?</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">++</span><span style="color: var(--shiki-color-text)">count;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-constant)">resultMap</span><span style="color: var(--shiki-token-function)">.set</span><span style="color: var(--shiki-color-text)">(nums[i]</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">count)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">//循环map</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   </span><span style="color: var(--shiki-token-keyword)">for</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-keyword)">let</span><span style="color: var(--shiki-color-text)"> [key</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">value] </span><span style="color: var(--shiki-token-keyword)">of</span><span style="color: var(--shiki-color-text)"> resultMap){</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">       </span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)">(value</span><span style="color: var(--shiki-token-keyword)">==</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-color-text)">){</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">           result </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> key</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">       }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> result;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项" aria-hidden="true">#</a> 杂项</h2>
<ul>
<li>数组相关</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">//比较两个数组是否相等</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">isEqual</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> (a</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> b) </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">JSON</span><span style="color: var(--shiki-token-function)">.stringify</span><span style="color: var(--shiki-color-text)">(a) </span><span style="color: var(--shiki-token-keyword)">===</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">JSON</span><span style="color: var(--shiki-token-function)">.stringify</span><span style="color: var(--shiki-color-text)">(b);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
