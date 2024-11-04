export default interface StackADT<T> {
  push(item: T): void;
  isEmpty(): boolean;
  pop(): T;
  peek(): T;
}
