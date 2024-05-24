class Scheduler {
  private parallelLimit: number;
  private working: number;
  private queue: (() => Promise<any>)[];
  constructor(parallelLimit: number) {
    this.parallelLimit = parallelLimit;
    this.working = 0;
    this.queue = [];
  }

  add(promise: () => Promise<any>) {
    this.queue.push(promise);
    this.run();
  }

  run() {
    while (this.queue.length && this.working < this.parallelLimit) {
      const promise = this.queue.shift();
      this.working ++;
      promise && promise().finally(() => {
        this.working--;
        this.run();
      });
    }
  }
}
