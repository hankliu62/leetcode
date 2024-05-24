

class Watcher {
  value: any;
  cb: Function;
  target: any;
  key: string;
  constructor(target: any, key: string, cb: Function) {
    this.cb = cb;
    this.target = target;
    this.key = key;

    Dep.target = this;
    this.value = target[key];
    Dep.target = null;
  }

  update() {
    this.value = this.target[this.key];
    this.cb(this.value);
  }
}

class Dep {
  static target: Watcher|null;
  subs: Watcher[];

  constructor() {
    this.subs = [];
  }

  addSub(sub: Watcher) {
    this.subs.push(sub);
  }

  notify() {
    this.subs.forEach(sub => sub.update());
  }
}

// 全局属性，通过该属性配置 Watcher
Dep.target = null

function observe(target: any) {
  if (target === null || typeof target !== 'object') {
    return;
  }

  const keys = Object.keys(target);
  keys.forEach(key => {
    defineReactive(target, key, target[key]);
  });
}

function defineReactive(target: any, key: string, value: any) {
  if (value && typeof value === 'object') {
    observe(value);
  }

  const dep = new Dep();
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    get() {
      if (Dep.target) {
        dep.addSub(Dep.target);
      }

      return value;
    },

    set(val) {
      if (value !== val) {
        value = val;
        dep.notify();
      }
    }
  })
}

function updateA(value: any) {
  console.log(value, "---------------------------");
}

function updateC(value: any) {
  console.log(value, "---------------------------");
}

function set(target: any, key: string, value: any) {
  if (target === null || typeof target !== 'object') {
    return;
  }

  defineReactive(target, key, value);
}

const abc: any = { a: 1 }

observe(abc);

new Watcher(abc, 'a', updateA);

abc.a = 2;

set(abc, 'c', 3);

new Watcher(abc, 'c', updateC);

abc.c = 4;
