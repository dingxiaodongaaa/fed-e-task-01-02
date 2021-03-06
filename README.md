# 丁晓东 ｜ Part 1 | 模块二

## 简答题

### 1. 描述引用计数的工作原理和优缺点。

通过在对象头中分配一个空间来保存该对象被引用的次数。引用计数算法就是通过判断每一个对象的引用数是够为0来判断这个对象是否是一个垃圾对象。一旦某个对象的引用数值变成0，该对象就会被垃圾回收机制回收。

当一个对象的引用数变成0的时候，需要递归遍历这个对象指向的所有的域，将它所有域所指向的对象的引用数值都减一，遍历完成之后，才能回收。

- **优点：**

    + 垃圾收集是存在于到整个应用程序的运行过程中的，发现垃圾就会立即回收。
    + 可以最大限度的减少程序的暂停（因为垃圾回收的时候程序是暂停执行的）。

- **缺点：**

    + 无法回收循环引用的对象。
    + 时间开销大，因为它会在程序运行的整个过程中监听对象引用数值的变化。

### 2. 描述标记整理算法的工作流程。

- 从跟对象开始遍历所有对象找到活动对象（可达对象）进行标记。
- 遍历堆中的所有对象，将所有的可达对象移动到堆内存的同一块区域中，将非可达对象进行垃圾回收，使非可达对象释放的空间集中在一起，减少内存碎片，并在过程中将前面的所有标记清除。

### 3. 描述 V8 中新生代存储区垃圾回收的流程。

- 新生代存储区中的垃圾垃圾回收主要采用**复制算法**和**标记整理算法**。

- 复制算法将内存一分为二，一部分处于使用状态称为From，一部分处于闲置状态称为To。

- 当分配对象时，先是在From空间中进行分配。

- 当开始垃圾回收时，会检查From空间中的存活对象，这些存活对象将被复制到To空间中，而非存活对象占用的空间将会被释放。完成复制后，From空间和To空间的角色发生对换。

- 在From空间中的对象复制到To空间中之前需要进行检查，在一定条件下需要将存活周期长的对象移动到老生代中，也就是对象的晋升。条件有两个：

    + 在这之前对象经历过复制算法;
    + To空间的内存占比超过25%;

- 在From空间中的对象复制到To空间中的过程中还会使用标记整理算法，对空间进行整理消除存碎片。

### 4. 描述增量标记算法在何时使用、及工作原理。

由于垃圾回收的时候，程序会被阻塞，V8 的老生代代存空间通常配置的较大，且存活的对象较多，全堆垃圾回收的标记、清除、整理就会阻塞主程序非常长的时间，所以就有了增量标记算法来改善这个问题。

增量标记将本来一口气执行完的标记操作分为了多段，每完成一段标记就让JavaScript应用逻辑执行一小会儿。这样应用逻辑和标记操作交替执行，直到标记完成。这样将长时间的标记操作分块执行之后，程序的停顿时间就会明显减少，提高用户体验。

## 代码题Ⅰ

1. 下载依赖
2. 在code目录下运行node program-practice-01.js

## 代码题Ⅱ

1. 下载依赖
2. 在code目录下运行node program-practice-02.js

