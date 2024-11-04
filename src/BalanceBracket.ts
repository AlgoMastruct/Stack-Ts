import Stack from "./Stack";

export default class BalanceBracket {
  static isBalance(sample: string): "Balanced" | "Unbalanced" {
    if (!sample) return "Unbalanced";
    const s = new Stack<string>();
    for (const c of sample) {
      if (c === "(" || c === "{" || c === "[") {
        s.push(c);
      } else if (c === ")" || c === "}" || c === "]") {
        if (c === ")" && !s.isEmpty() && s.peek() === "(") {
          s.pop();
        } else if (c === "}" && !s.isEmpty() && s.peek() === "{") {
          s.pop();
        } else if (c === "]" && !s.isEmpty() && s.peek() === "[") {
          s.pop();
        } else {
          return "Unbalanced";
        }
      } else {
        return "Unbalanced";
      }
    }
    return s.isEmpty() ? "Balanced" : "Unbalanced";
  }
}
