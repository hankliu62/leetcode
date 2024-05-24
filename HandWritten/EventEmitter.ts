class EventEmitter {
  private listeners: Map<string, Array<Function>> = new Map();
  constructor() {
    this.listeners = new Map();
  }

  on(eventName: string, fn: Function): () => void {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }

    this.listeners.get(eventName)!.push(fn);

    return () => {
      const listeners = this.listeners.get(eventName);
      listeners?.splice(listeners.findIndex((cur) => fn === cur), 1);
    }
  }

  off(eventName: string, fn: Function) {
    const listeners = this.listeners.get(eventName);
    listeners?.splice(listeners.findIndex((cur) => fn === cur), 1);
  }

  emit(eventName, ...args) {
    const listeners = this.listeners.get(eventName);
    listeners?.forEach((fn) => fn(...args));
  }

  once(eventName: string, fn: Function) {
    const current = (...args: any[]) => {
      fn(...args);

      this.off(eventName, fn);
    }

    this.on(eventName, current);
  }
}
