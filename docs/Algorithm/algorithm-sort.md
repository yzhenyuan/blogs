# 算法排序

#### 常见算法

![](../.vuepress/public/pages/sort.png)


#### 我们衡量一个算法的指标包括：

1. 时间复杂度 (过程中需要比较和交换的次数)
2. 空间复杂度 (过程中需要的辅助存储空间)
3. 稳定性 (是否可以保证排序后相等元素的初始顺序)
4. 内部排序/外部排序 (在排序过程中数据元素是否完全在内存)

![](../.vuepress/public/pages/sort2.png)

## 一、 选择排序

### 原理

1. 假设未排序序列的第一个是最大值，记下该元素的位置，从前往后比较
2. 若某个元素比该元素大，覆盖之前的位置
3. 重复第二个步骤，直到找到未排序的末尾
4. 将未排序元素的第一个元素和最大元素交换位置
5. 重复前面几个步骤，直到所有元素都已经排序

![](../.vuepress/public/pages/slectSort.gif)


### 代码实现

```js
function selectSort(arr) {
  let len = arr.length,
    index;
  for (let i = 0; i < len - 1; i++) {
    index = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[index] > arr[j]) {
        //寻找最小值
        index = j; //保存最小值的索引
      }
    }
    // 之前记录的index 没有被替换，说明index 就是最小值
    if (index != i) {
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
  return arr;
}
```

## 二、冒泡排序

### 原理

1. 依次对比相邻 2 个数字，前者比后者大就调换位置
2. 重复第一步操作，直到所有数字都按顺序排列

![](../.vuepress/public/pages/bSort.gif)

### 代码实现

```js
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      // 相邻元素两两对比
      if (arr[j] > arr[j + 1]) {
        // 元素交换
        let temp = arr[j + 1]; 
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
```

## 三、 插入排序

### 原理

原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入

1. 从第一个元素开始，该元素可以认为已经被排序


![](../.vuepress/public/pages/insertSort.gif)

### 代码实现

```js
function insertionSort(arr) {
  let len = arr.length, preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];

    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}
```


[参考](https://blog.csdn.net/xiaoxiaojie12321/article/details/81380834)