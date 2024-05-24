/**
 * 将给定数组转换为堆结构。
 *
 * @param arr 数组，需要被转换为堆的数组。
 * @param n 数组的长度。
 * @param i 当前节点的索引。
 * 该函数通过比较当前节点与其子节点的值，来维护堆的性质。如果当前节点不是最大值，则交换当前节点与最大子节点的位置，并递归地对子节点进行调整。
 */
function heapify(arr: number[], n: number, i: number) {
  // 初始化当前最大值为当前节点
  let largest = i;
  // 计算左子节点的索引
  let l = 2 * i + 1;
  // 计算右子节点的索引
  let r = 2 * i + 2;

  // 如果左子节点存在且大于当前最大值，则更新最大值为左子节点
  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }

  // 如果右子节点存在且大于当前最大值，则更新最大值为右子节点
  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }

  // 如果最大值不是当前节点，则交换当前节点与最大子节点的值，并递归调整最大子节点
  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

/**
 * 使用堆排序算法对数组进行排序。
 * @param arr 待排序的数字数组。
 */
function heapSort(arr: number[]) {
  const n = arr.length;

  // 建立最大堆
  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify(arr, n, i);
  }

  // 依次从堆中取出最大元素，放到数组末尾，再调整堆
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}

// 示例使用
const arr = [10, 80, 30, 70, 40, 50, 20, 60];
heapSort(arr);
console.log(arr); // 输出排序后的数组



function heapSort1(arr: number[]): number[] {
  buildMaxHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
      swap(arr, 0, i);
      maxHeapify(arr, 0, i);
  }

  return arr;
}

function buildMaxHeap(arr: number[]): void {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      maxHeapify(arr, i, n);
  }
}

function maxHeapify(arr: number[], i: number, size: number): void {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  if (left < size && arr[left] > arr[largest]) {
      largest = left;
  }

  if (right < size && arr[right] > arr[largest]) {
      largest = right;
  }

  if (largest !== i) {
      swap(arr, i, largest);
      maxHeapify(arr, largest, size);
  }
}

function swap(arr: number[], i: number, j: number): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 示例
const array: number[] = [4, 2, 8, 5, 1, 9, 6, 3, 7];
console.log("原始数组:", array);
console.log("排序后数组:", heapSort1(array.slice()));

