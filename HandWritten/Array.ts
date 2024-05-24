/**
 * 将嵌套数组拉平为一维数组。
 * @param array 要拉平的数组。
 * @param deep 是否深度拉平数组。如果为true，则会尽可能地将数组拉平；如果为false，则只拉平一层。
 * @returns 返回拉平后的数组。
 */
function flat(array: any[], deep?: boolean) {
  // 使用数组的reduce方法，逐个处理数组元素，将它们加入到结果数组中
  return array.reduce((result, item) => {
    // 如果当前项是数组，并且要求深度拉平，则递归调用flat函数拉平当前项
    // 否则，直接将当前项加入结果数组
    return result.concat(Array.isArray(item) && deep ? flat(item, deep) : item);
  }, []);
};

/**
 * 对给定数组进行归约操作，返回通过回调函数计算出的单个值。
 * @param array 要归约的数组。
 * @param fn 回调函数，用于计算每个元素并生成最终结果。接受当前累计值、当前元素、当前元素的索引和整个数组作为参数。
 * @param init 可选的初始累计值。如果未提供，将使用数组的第一个元素作为初始值。
 * @returns 经过归约操作后的最终结果。
 */
function reduce<T, U>(array: T[], fn: (total: U, cur: T, currentIndex: number, arr: T[]) => U, init?: U) : U {
  const len = array.length;
  // 初始化累计值和索引。如果未提供初始值，则将累计值设置为数组的第一个元素。
  let [res, i]: [U, number] = init === undefined ? [array[0] as any, 1] : [init, 0];
  // 遍历数组，从索引1（如果未提供初始值）或索引0（如果提供了初始值）开始，对每个元素应用回调函数。
  for (; i < len; i++) {
    const cur = array[i];
    res = fn(res, cur, i, array);
  }

  return res;
}


/**
 * 将数组展平到指定的深度。
 * @param array 要展平的数组。
 * @param deep 要展平的深度。
 * @returns 返回展平后的数组。
 */
function flat2(array: any[], deep: number): any[] {
  // 使用数组的reduce方法迭代每个元素，将它们逐个添加到结果数组中
  return array.reduce((res, item) => {
    // 如果已达到指定的展平深度，直接添加当前元素到结果数组
    // 如果当前元素是数组，并且还需要继续展平，则递归调用flat2函数
    return res.concat(deep > 0 ? item : Array.isArray(item) ? flat2(item, deep - 1) : item)
  }, []);
}

/**
 * 对给定数组进行映射操作，通过应用一个函数到数组的每个元素上，生成一个新的数组。
 * @param array 输入的数组，其元素类型为 T。
 * @param fn 一个函数，它接受数组的每个元素、当前元素的索引以及整个数组作为参数，返回一个新元素的值，新元素的类型为 U。
 * @returns 返回一个新数组，其中的每个元素都是通过应用函数 fn 得到的，数组元素类型为 U。
 */
function map<T, U>(array: T[], fn: (item: T, index: number, arr: T[]) => U): U[] {
  const res: U[] = []; // 创建一个空数组来存放映射后的结果

  // 遍历输入数组，对每个元素应用函数 fn，并将结果添加到 res 数组中
  for (let i = 0, len = array.length; i < len; i ++) {
    res[i] = fn(array[i], i, array);
  }

  return res; // 返回映射后的数组
}

/**
 * 根据提供的函数对数组元素进行过滤。
 * @param array 要过滤的数组。
 * @param fn 过滤函数，对于数组中的每个元素，该函数返回true则保留该元素，返回false则排除该元素。该函数接收三个参数：当前元素，当前元素的索引，当前元素所在的数组。
 * @returns 过滤后的新数组。
 */
function filter<T>(array: T[], fn: (item: T, index: number, arr: T[]) => boolean): T[] {
  const res: T[] = []; // 过滤结果数组

  // 遍历数组，应用过滤函数
  for (let i = 0, len = array.length; i < len; i ++) {
    if (fn(array[i], i, array)) { // 如果当前元素通过过滤函数的检查
      res.push(array[i]); // 将其添加到结果数组中
    }
  }

  return res; // 返回过滤后的新数组
}

