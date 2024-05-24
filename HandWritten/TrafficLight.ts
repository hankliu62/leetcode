
/**
 * 打印交通灯状态
 * 3s 红灯；2s 黄灯；1s 绿灯
 * 该函数没有参数。
 * 没有返回值。
 */
function printTrafficLight() {
  let date = Date.now();
  /**
   * 一个打印红黄绿灯状态的函数，每次打印后按照红灯3秒、黄灯2秒、绿灯1秒的顺序延迟。
   * 不接受参数，也不返回任何值。
   */
  function print() {
    // 创建一个延迟3秒的Promise，模拟红灯亮起，并记录当前时间
    new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('红灯', Date.now() - date)
        date = Date.now();
        resolve();
      }, 3000)
    }).then(() => {
      // 红灯亮起后，创建一个延迟2秒的Promise，模拟黄灯亮起，并记录当前时间
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('黄灯', Date.now() - date)
          date = Date.now();
          resolve();
        }, 2000)
      })
    }).then(() => {
      // 黄灯亮起后，创建一个延迟1秒的Promise，模拟绿灯亮起，并记录当前时间，然后递归调用print函数
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('绿灯', Date.now() - date)
          date = Date.now();
          print();
        }, 1000)
      })
    });
  }
  print();
}
