# 基础知识
## Map知识
> Map是一组键值对的结构，具有极快的查找速度。

| 方法 | 介绍 | 
| :----| :---- |
| new Map() | 	创建新的 Map 对象。 
| set() | 为 Map 对象中的键设置值。
| get() | 获取 Map 对象中键的值。 
| entries() | 返回 Map 对象中键/值对的数组。 
| keys() | 返回 Map 对象中键的数组。 
| values() | 返回 Map 对象中值的数组。 
| clear() | 删除 Map 中的所有元素。 
| delete() | 删除由键指定的元素。 
| has() | 如果键存在，则返回 true。 
| forEach() | 为每个键/值对调用回调。 


例子：给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。[使用哈希表存储每个数字和该数字出现的次数。遍历数组即可得到每个数字出现的次数，并更新哈希表，最后遍历哈希表，得到只出现一次的数字。]

如：输入: [2,2,1]
输出: 1

```typescript
function singleNumber(nums: number[]): number {
    let result;
    //创建一个map
    let resultMap = new Map();
    for(let i=0;i<nums.length;i++){
        let count = resultMap.get(nums[i]);
        count = count ==null? 1 : ++count;
        resultMap.set(nums[i],count)
    }

    //循环map
   for(let [key,value] of resultMap){
       if(value==1){
           result = key
       }
   }
    return result;
};
```


## 杂项
- 数组相关
```javascript
    //比较两个数组是否相等
    const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
```