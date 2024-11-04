import StackADT from "./StackADT";

export default class Stack<T> implements StackADT<T> {
  // attributes
  private readonly INITIAL_CAPACITY: number;
  private a: T[];
  private top: number;

  // Constructor
  constructor(initCapacity: number = 10) {
    if (initCapacity < 1) {
      throw new Error("init capacity must be >= 1");
    }

    this.INITIAL_CAPACITY = initCapacity || 10;
    this.a = new Array<T>(initCapacity || 10).fill(null as T);
    this.top = -1;
  }

  private ensureCapacity(): void {
    if (this.top === this.a.length - 1) {
      const newCapacity = this.a.length + this.INITIAL_CAPACITY;
      const b: T[] = new Array(newCapacity).fill(null as T);
      for (let i = 0; i < this.a.length; i++) {
        b[i] = this.a[i];
      }

      this.a = b;
    }
  }

  push(item: T): void {
    this.ensureCapacity();
    this.a[++this.top] = item;
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new Error("Stack is Empty!");
    }
    return this.a[this.top--];
  }

  isEmpty() {
    return this.top === -1;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is Empty!");
    }
    return this.a[this.top];
  }
}
