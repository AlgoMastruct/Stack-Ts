import BalanceBracket from "./src/BalanceBracket";
import Stack from "./src/Stack";

const s = new Stack<string>(5);
s.push("hello");
s.push("masih");
console.log(s);
console.log(s.peek());

const s2 = new Stack<number>(2);

s2.push(5);
s2.push(10);
console.log(s2.peek());

console.log(BalanceBracket.isBalance("{[({})[]]}")); // Balanced
console.log(BalanceBracket.isBalance("(()())")); // Balanced
console.log(BalanceBracket.isBalance("())(()")); // Unbalanced
console.log(BalanceBracket.isBalance("[()]")); // Balanced
console.log(BalanceBracket.isBalance(")((")); // Unbalanced
console.log(BalanceBracket.isBalance("[(])")); // Unbalanced
console.log(BalanceBracket.isBalance("[()()]")); // Balanced
console.log(BalanceBracket.isBalance("(()))()")); // Unbalanced
console.log(BalanceBracket.isBalance("((())")); // Unbalanced
