import { test, expect } from "@jest/globals";
import { sum } from "../components/sum";

test("return the correct sum of two numbers", () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(-2, -3)).toBe(-5);
  expect(sum(5, 0)).toBe(5);
  expect(sum(1.5, 2.5)).toBe(4);
});
