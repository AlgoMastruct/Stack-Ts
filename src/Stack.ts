import StackADT from "./StackADT";

export default class Stack implements StackADT {
  // attributes
  private readonly INITIAL_CAPACITY: number;
  private a: number[];
  private top: number;

  // Constructor
  constructor(initCapacity: number = 10) {
    if (initCapacity < 1) {
      throw new Error("init capacity must be >= 1");
    }

    this.INITIAL_CAPACITY = initCapacity || 10;
    this.a = new Array<number>(initCapacity || 10).fill(0);
    this.top = -1;
  }

  private ensureCapacity(): void {
    if (this.top === this.a.length - 1) {
      const newCapacity = this.a.length + this.INITIAL_CAPACITY;
      const b: number[] = new Array(newCapacity).fill(0);
      for (let i = 0; i < this.a.length; i++) {
        b[i] = this.a[i];
      }

      this.a = b;
    }
  }

  push(item: number): void {
    this.ensureCapacity();
    this.a[++this.top] = item;
  }

  pop(): number {
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
