enum EPromiseStatus {
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected'
}

type TResolveFunc<T> = (value?: any) => T
type TRejectFunc<T> = (reason?: any) => T

/**
 * 自定义Promise类，实现基本的Promise功能。
 */
class MyPromise {
  private status: EPromiseStatus = EPromiseStatus.Pending; // 当前Promise的状态
  private value: any; // Promise成功时的值
  private reason: any; // Promise失败时的原因
  private onFulfilledCallbacks: Array<Function> = []; // 成功回调函数列表
  private onRejectedCallbacks: Array<Function> = []; // 失败回调函数列表

  /**
   * 构造函数，接受一个执行器函数，用于执行异步操作。
   * @param executor 执行器函数，接受resolve和reject两个参数，用于改变Promise的状态。
   */
  constructor(executor: (resolve: TResolveFunc<void>, reject: TRejectFunc<void>) => void) {
    const resolve = (value: any) => {
      // 当状态为Pending时，改变状态为Fulfilled，并执行所有成功回调
      if (this.status === EPromiseStatus.Pending) {
        this.status = EPromiseStatus.Fulfilled;
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn());
      }
    };

    const reject = (reason: any) => {
      // 当状态为Pending时，改变状态为Rejected，并执行所有失败回调
      if (this.status === EPromiseStatus.Pending) {
        this.status = EPromiseStatus.Rejected;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };

    try {
      // 尝试执行executor函数，捕获异常并调用reject
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  /**
   * then方法，用于注册成功和失败的回调函数。
   * @param onFulfilled 成功回调函数
   * @param onRejected 失败回调函数
   * @returns 返回一个新的MyPromise实例
   */
  public then(onFulfilled?: TResolveFunc<any>, onRejected?: TRejectFunc<any>): MyPromise {
    // 如果回调函数未定义，直接返回当前实例
    if (!onFulfilled || !onRejected) {
      return this;
    }
    return new MyPromise((resolve, reject) => {
      const handle = (action: typeof resolve | typeof reject, onHandler?: typeof onFulfilled | typeof onRejected) => {
        try {
          // 如果未提供处理函数，直接调用action
          if (!onHandler) {
            action(this.status === EPromiseStatus.Fulfilled ? this.value : this.reason)
            return;
          }

          // 执行处理函数，根据结果调用resolve或reject
          const result = onHandler(this.status === EPromiseStatus.Fulfilled ? this.value : this.reason);
          if (result instanceof MyPromise) {
            // 如果处理函数返回一个MyPromise，递归调用then
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      }

      // 根据当前状态，异步调用handle函数
      if (this.status === EPromiseStatus.Fulfilled) {
        setTimeout(() => handle(resolve, onFulfilled), 0);
      } else if (this.status === EPromiseStatus.Rejected) {
        setTimeout(() => handle(reject, onRejected), 0);
      } else {
        // 如果状态为Pending，注册回调函数
        this.onFulfilledCallbacks.push(() => handle(resolve, onFulfilled));
        this.onRejectedCallbacks.push(() => handle(reject, onRejected));
      }
    });
  }

  /**
   * catch方法，用于注册失败的回调函数。
   * @param onRejected 失败回调函数
   * @returns 返回一个新的MyPromise实例
   */
  public catch(onRejected?: TRejectFunc<any>): MyPromise {
    // 使用then方法注册失败回调
    return onRejected ? this.then(undefined, onRejected) : this;
  }

  /**
   * finally方法，用于注册一个最终执行的回调函数。
   * @param onFinally 最终执行的回调函数
   * @returns 返回一个新的MyPromise实例
   */
  public finally(onFinally?: () => void): MyPromise {
    // 使用then方法注册成功和失败的回调，均调用onFinally
    return onFinally ? this.then(
      (value) => {
        onFinally();
        return value;
      },
      (reason) => {
        onFinally();
        throw reason;
      }
    ) : this;
  }

  /**
   * 静态方法，创建一个已成功状态的MyPromise实例。
   * @param value 成功的值
   * @returns 返回一个新的MyPromise实例
   */
  static resolve(value?: any): MyPromise {
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }

  /**
   * 静态方法，创建一个已失败状态的MyPromise实例。
   * @param reason 失败的原因
   * @returns 返回一个新的MyPromise实例
   */
  static reject(reason?: any): MyPromise {
    return new MyPromise((_, reject) => {
      reject(reason);
    });
  }

  /**
   * 静态方法，接收一个Promise数组，当所有Promise都成功时，返回一个包含所有成功值的数组。
   * @param promises Promise数组
   * @returns 返回一个新的MyPromise实例，当所有输入的Promise都成功时解析为值数组，任一Promise失败则立即拒绝
   */
  static all(promises: MyPromise[]): MyPromise {
    return new MyPromise((resolve, reject) => {
      const results: any[] = []; // 存储成功的结果
      let count = 0; // 记录处理的数量
      for (let i = 0, len = promises.length; i < len; i ++) {
        const promise = promises[i];
        // 对每个Promise注册成功和失败的回调
        promise.then((value) => {
          results[i] = value;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        }, reject);
      }
    });
  }

  /**
   * 静态方法，接收一个Promise数组，当任一Promise成功或失败时，返回结果或原因。
   * @param promises Promise数组
   * @returns 返回一个新的MyPromise实例，当任一输入的Promise成功时解析其值，任一Promise失败则立即拒绝
   */
  static race(promises: MyPromise[]): MyPromise {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        // 对每个Promise注册成功和失败的回调
        promise.then(resolve, reject);
      });
    });
  }

  /**
 * 接收一个 MyPromise 实例数组，并返回一个新的 MyPromise，该 MyPromise 在所有传入的 Promise 都解决（无论是成功还是失败）后解决。
 * @param promises MyPromise 实例数组，每个实例要么成功解决，要么失败解决。
 * @returns 返回一个 MyPromise，它包含一个结果数组，数组中每个元素都表示相应输入 Promise 的解决状态（成功或失败）和值。
 */
static allSettled(promises: MyPromise[]): MyPromise {
  return new MyPromise((resolve) => {
    const results: { status: EPromiseStatus, value: any }[] = []; // 用于存储每个 promise 的解决状态和值
    let count = 0; // 记录已处理的 promise 数量

    for (let i = 0, len = promises.length; i < len; i++) {
      const promise = promises[i];

      // 为每个 promise 注册成功和失败的回调
      promise.then((value) => {
        results[i] = {
          status: EPromiseStatus.Fulfilled,
          value,
        };
      }, (reason) => {
        results[i] = {
          status: EPromiseStatus.Rejected,
          value: reason,
        };
      }).finally(() => {
        count++; // 已处理的 promise 数量加一
        if (count === promises.length) {
          resolve(results); // 当所有 promise 都已处理时，解决返回的 promise
        }
      });
    }
  });
}
}
