export default interface StackADT {
  push(item: number): void;
  isEmpty(): boolean;
  pop(): number;
  peek(): number;
}
