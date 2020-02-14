### 1. 安装
```
npm install
```

### 2. 启动测试
```
npm test
```

### 3. 目录

#### 557. [反转字符串中的单词](https://github.com/materialcoder/leetcode-js/blob/master/code/string/557.js)
#### 696. [计数二进制子串](https://github.com/materialcoder/leetcode-js/blob/master/code/string/696.js)

#### 17. [电话号码的字母组合](https://github.com/materialcoder/leetcode-js/blob/master/code/array/17.js)
#### 914. [卡牌分组](https://github.com/materialcoder/leetcode-js/blob/master/code/array/914.js)
#### 605. [种花问题](https://github.com/materialcoder/leetcode-js/blob/master/code/array/605.js)
#### 89. [格雷编码](https://github.com/materialcoder/leetcode-js/blob/master/code/array/89.js)

#### 459. [重复的子字符串](https://github.com/materialcoder/leetcode-js/blob/master/code/regexp/459.js)
#### 10. [正则表达式匹配](https://github.com/materialcoder/leetcode-js/blob/master/code/regexp/10.js)

#### 922. [按奇偶排序数组 II](https://github.com/materialcoder/leetcode-js/blob/master/code/sort/922.js)
#### 215. [数组中的第K个最大元素](https://github.com/materialcoder/leetcode-js/blob/master/code/sort/215.js)
#### 164. [最大间距](https://github.com/materialcoder/leetcode-js/blob/master/code/sort/164.js)
#### 41. [缺失的第一个正数](https://github.com/materialcoder/leetcode-js/blob/master/code/sort/41.js)

#### 93. [复原IP地址](https://github.com/materialcoder/leetcode-js/blob/master/code/recursive/93.js)
#### 30. [串联所有单词的子串](https://github.com/materialcoder/leetcode-js/blob/master/code/recursive/30.js)

#### 682. [棒球比赛](https://github.com/materialcoder/leetcode-js/blob/master/code/stack/682.js)
#### 85. [最大矩形](https://github.com/materialcoder/leetcode-js/blob/master/code/stack/85.js)

#### 622. [设计循环队列](https://github.com/materialcoder/leetcode-js/blob/master/code/queue/622.js)
#### 621. [任务调度器](https://github.com/materialcoder/leetcode-js/blob/master/code/queue/621.js)

#### 148. [链表的排序](https://github.com/materialcoder/leetcode-js/blob/master/code/chain/148.js)
#### 141. [环形链表](https://github.com/materialcoder/leetcode-js/blob/master/code/chain/141.js)

#### 54. [螺旋矩阵](https://github.com/materialcoder/leetcode-js/blob/master/code/matrix/54.js)
#### 48. [旋转图像](https://github.com/materialcoder/leetcode-js/blob/master/code/matrix/48.js)

#### 101. [对称二叉树](https://github.com/materialcoder/leetcode-js/blob/master/code/btree/101.js)
#### 98. [验证二叉搜索树](https://github.com/materialcoder/leetcode-js/blob/master/code/btree/98.js)

#### 451. [根据字符出现频率排序](https://github.com/materialcoder/leetcode-js/blob/master/code/heap/451.js)
#### 313. [超级丑数](https://github.com/materialcoder/leetcode-js/blob/master/code/heap/313.js)

#### 122. [买卖股票的最佳时机 II](https://github.com/materialcoder/leetcode-js/blob/master/code/greed/122.js)
#### 860. [柠檬水找零](https://github.com/materialcoder/leetcode-js/blob/master/code/greed/860.js)

#### 63. [不同路径 II](https://github.com/materialcoder/leetcode-js/blob/master/code/dp/63.js)
#### 787. [K 站中转内最便宜的航班](https://github.com/materialcoder/leetcode-js/blob/master/code/dp/787.js)

### 4. 排序算法
https://www.jianshu.com/p/f4cca5ce055a
| 排序算法 | 平均时间复杂度 | 最好情况 | 最坏情况 | 空间复杂度 | 稳定性 | 复杂性 |
| - | :-: | :-: | :-: | :-: | :-: | :-: |
|冒泡排序|O($n^2$)|O(n)|O($n^2$)|O(1)|稳定|简单|
|选择排序|O($n^2$)|O($n^2$)|O($n^2$)|O(1)|不稳定|简单|
|插入排序|O($n^2$)|O(n)|O($n^2$)|O(1)|稳定|简单|
|希尔排序|O($nlogn$)|O($nlog^2n$)|O($nlog^2n$)|O(1)|不稳定|较复杂|
|归并排序|O($nlogn$)|O($nlogn$)|O($nlogn$)|O(n)|稳定|较复杂|
|快速排序|O($nlogn$)|O($nlogn$)|O($n^2$)|O($logn$)|不稳定|较复杂|
|堆排序|O($nlogn$)|O($nlogn$)|O($nlogn$)|O(1)|不稳定|较复杂|
|基数排序|$O(d(n+r))$|$O(d(n+r))$|$O(d(n+r))$|$O(r)$|稳定|较复杂|

栈：先进后出

队列：先进先出

堆：必须是完全二叉树；任一节点的值是其子树所有节点的最大值（最大堆）或最小值（最小堆）

贪心算 法：贪心算法（又称贪婪算法）是指，在对问题求解时，总是做出在当前看来是最好的选择。也就是说，不从整体最优上加以考虑，他所做出的是在某种意义上的局部最优解。
贪心算法不是对所有问题都能得到整体最优解，关键是贪心策略的选择，选择的贪心策略必须具备无后效性，即某个状态以前的过程不会影响以后的状态，只与当前状态有关。

动态规划：状态转移方程、最优子结构、边界