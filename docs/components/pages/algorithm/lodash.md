# Lodash

## chunk
将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
- 例子：
- chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
- chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```javascript
    /**
     *  @param {Array} array The array to process.
     *  @param {number} [size=1] 拆分的长度
     */
    function chunk(array,size=1) {
        size = Math.max(size,0);
        //获取数组长度
        const length = arrar ==null? 0 : arrar.length;
        if(!length || size<0){
            return [];
        }

        let index = 0;
        let resIndex = 0;
        const result = new Array(Math.ceil(length/size));

        while(index<length){
            //slice 数组的拆分
            result[resIndex++] = slice(arrar,index,(index+=size));
        }

        return result;
    }
```