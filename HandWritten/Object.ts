/**
 * 创建一个新的对象实例，其原型为传入的对象。
 * @param object 用于设置新实例原型的对象。
 * @returns 返回一个新的对象实例，其原型链上包含了传入的对象。
 */
function create(object: Object) {
  // 定义一个空的构造函数
  function Sub() {};
  // 设置Sub的原型为传入的对象
  Sub.prototype = object;
  // 修复构造函数指向，确保new Sub()能够正确工作
  Sub.constructor = Sub;
  // 返回一个新的Sub实例，其原型链上包含了传入的对象
  return new Sub();
}


/**
 * 检查一个对象是否为指定构造函数的实例。
 * @param obj 要检查的对象。
 * @param constructor 指定的构造函数。
 * @returns 如果对象是指定构造函数的实例，则返回true；否则返回false。
 */
function instanceOf(obj: any, constructor: (new(...args) => any)): boolean {
  // 如果对象为null或不是对象类型，则直接返回false
  if (obj === null || typeof obj !== 'object') {
    return false;
  }

  let prot = Object.getPrototypeOf(obj);
  // 通过循环遍历对象的原型链，直到找到匹配的构造函数或到达原型链顶端
  while (prot !== null) {
    // 如果当前原型等于指定的构造函数，则返回true
    if (prot === constructor) {
      return true;
    }

    // 继续向上遍历原型链
    prot = Object.getPrototypeOf(prot);
  }

  // 如果遍历完原型链未找到匹配的构造函数，则返回false
  return false;
}

/**
 * 使用指定的构造函数创建一个新实例。
 * @param constructor 一个构造函数，当调用时可以接受任意参数并返回一个实例。
 * @returns 返回构造函数的实例。如果构造函数返回一个对象，则返回该对象，否则返回构造函数调用的上下文对象。
 */
function myNew<T>(constructor: (new(...args) => T)): T {
  // 创建一个空对象作为构造函数调用的上下文
  const obj = Object.create(constructor.prototype);

  // 在obj上下文中调用构造函数
  const ret = constructor.call(obj);

  // 判断构造函数的返回值是否为一个对象，是则返回该对象，否则返回调用构造函数时的上下文对象
  return ret instanceof Object ? ret : obj;
}

/**
 * 克隆对象。
 * @param obj 要克隆的对象。
 * @param deep 是否进行深度克隆，默认为false。
 * @param hash 用于存储已克隆对象的映射，默认为一个新的WeakMap实例。
 * @returns 返回obj的克隆副本。如果obj不是对象或为null，则直接返回obj。
 */
function clone(obj: any, deep: boolean = false, hash = new WeakMap()) {
  // 当obj为null或非对象时，直接返回obj
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  // 如果hash中已存在obj的克隆，则直接返回该克隆
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  // 在hash中记录obj与其克隆的关系
  hash.set(obj, obj);
  // 根据obj的类型初始化克隆对象
  const cloneObj = Array.isArray(obj) ? [] : {};

  // 遍历obj的所有自有属性，进行克隆
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // 如果需要深度克隆，则递归克隆属性值，否则直接复制
      cloneObj[key] = deep ? clone(obj[key], deep, hash) : obj[key];
    }
  }

  return cloneObj;
}
