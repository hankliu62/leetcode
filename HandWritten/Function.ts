/**
 * 重写Function.prototype.call方法，允许函数在指定的对象上下文中调用，
 * 并可以传入多个参数。该方法动态地改变函数的this值，使之指向调用该方法的对象。
 * @param that 指定的上下文对象。如果未提供，则默认为window对象。
 * @param args 传给函数的参数，以扩展参数的形式传入。
 * @returns 调用函数后的返回值。
 */
Function.prototype.call = function(that, ...args) {
  const fn = Symbol("fn"); // 使用Symbol创建一个唯一的函数名，以避免命名冲突。
  that = that || window; // 如果未提供上下文对象，则默认使用window对象。
  that[fn] = this; // 将函数绑定到that对象的Symbol键上。
  const result = that[fn](...args); // 通过that对象调用绑定的函数，并传入参数。
  delete that[fn]; // 调用完成后，删除that对象上的函数绑定。
  return result; // 返回函数执行的结果。
}


/**
 * 为Function.prototype.bind函数添加实现，允许函数的上下文(this)被绑定到指定的对象，并且可以预先设定函数的参数。
 * @param that 指定上下文对象，如果未提供，则默认为window对象。
 * @param args 预设的函数参数，这些参数将在调用时先于实际传递的参数传递给绑定的函数。
 * @returns 返回一个新的函数，该函数在调用时会以指定的上下文对象(that)和预设参数(args)来调用原函数。
 */
Function.prototype.bind = function(that, ...args) {
  const fn = Symbol("fn"); // 使用Symbol创建一个唯一的属性名，以避免与其它属性名冲突。
  that = that || window; // 如果未提供that参数，则默认为window对象。
  that[fn] = this; // 将原函数绑定到that对象的Symbol属性上。

  // 返回一个新的函数，该函数在调用时会执行绑定的原函数。
  return (...innerArgs) => {
    const result = that[fn](...args, ...innerArgs); // 调用原函数，并传入预设参数和实际参数。
    delete that[fn]; // 调用完成后，删除绑定的函数，避免污染对象。
    return result; // 返回原函数的执行结果。
  };
}

/**
 * 重写Function.prototype.apply方法，以支持在某些特定环境下可能无法正常使用原生apply的情况。
 * @param that 代指this的上下文对象，若未提供则默认为window对象。
 * @param args 要传递给函数的参数数组。
 * @returns 调用函数后的返回结果。
 */
Function.prototype.apply = function(that, args) {
  const fn = Symbol("fn"); // 使用Symbol创建一个唯一的函数标识。

  // 设置that为提供的上下文对象，若未提供则默认为window。
  that = that || window;

  // 将当前函数绑定到that对象上。
  that[fn] = this;

  // 使用展开运算符将args数组的元素作为参数调用that上的当前函数。
  const result = that[fn](...args);

  // 调用完成后，移除that上的当前函数绑定。
  delete that[fn];

  // 返回函数执行的结果。
  return result;
}

/**
 * 函数柯里化
 * curry函数用于将一个多元函数转换成一系列一元函数。
 * @param fn 需要被转换的多元函数，该函数应接受多个参数并返回任意类型。
 * @returns 返回一个 curried 函数，该函数接受一个或多个参数，当参数数量达到原函数要求时，执行原函数；否则，返回一个新的内部函数以继续接收参数。
 */
function curry(fn: ((...args) => any)) {
  // curried函数用于接收参数并判断是否已满足原函数的参数要求。
  return function curried(...args) {
    // 当当前接收到的参数数量等于原函数需要的参数数量时，执行原函数并返回结果。
    if (args.length === fn.length) {
      return fn(...args);
    }

    // 如果参数数量不足，返回一个新的内部函数，用于继续接收剩余参数。
    return function(...innerArgs) {
      return curried(...args, ...innerArgs);
    }
  }
}

// @ts-ignore
const curry2 = (fn) => (judge = (...args) => (fn.length === args.length ? fn(...args) : (...innerArgs) => judge(...args, ...innerArgs)))

/**
 * 函数防抖动封装。
 * 函数防抖是一种优化策略，用于限制函数调用的频率，常用于处理高频触发的事件，如输入框的输入事件。
 * @param fn 需要被防抖的函数。
 * @param delay 延迟的毫秒数。
 * @param immediate 是否在第一次触发时立即执行，而不是等待 delay 毫秒后执行。true 表示立即执行，false 表示延迟执行。
 * @returns 返回一个经过防抖处理的函数。
 */
function debounce(fn: (...args: any[]) => void, delay: number, immediate: boolean) {
  let timer: any = null;

  // 返回一个封装函数，用于实际的防抖逻辑处理
  return (...args: any[]) => {
    // 如果存在定时器，则清除，以防止之前的定时器影响当前的调用
    timer && clearTimeout(timer);

    // 当 immediate 为 true 时，立即执行逻辑
    if (immediate) {
      // 判断是否应该立即执行函数
      const isCallNow = !timer;

      // 设置定时器，但目的只是在 delay 毫秒后将 timer 设置为 null，以满足立即执行的条件
      timer = setTimeout(() => {
        timer = null;
      }, delay);

      // 如果应该立即执行，则调用原函数
      isCallNow && fn.apply(this, args);
    } else {
      // 当 immediate 为 false 时，常规的防抖逻辑，延迟执行
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  }
}

/**
 * 函数节流器
 * @param fn 要节流化的函数
 * @param delay 延迟的毫秒数
 * @returns 返回一个新函数，该函数将控制调用原函数的频率
 */
function throttle(fn: (...args: any[]) => void, delay: number) {
  let timer: any = null; // 利用闭包存储定时器的引用

  // 返回一个包装函数来控制原函数的调用频率
  return (...args: any[]) => {
    if (timer) {
      // 如果定时器已存在，则不执行原函数，直接返回
      return;
    }

    // 设置定时器，并在延迟后执行原函数
    timer = setTimeout(() => {
      fn.apply(this, args); // 使用apply来确保原函数能正确接收参数并执行
      timer = null; // 执行完毕后，清除定时器引用
    }, delay)
  }
}
