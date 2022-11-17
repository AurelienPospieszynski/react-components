/**
 * DO NOT UPDATE
 * This is the exercise objets that will be used to create the exercises.
 */

import Styles from "../exercise/1-style/Exercise1";
import ShoppingList from "../exercise/2-list/Exercise2";
import Form from "../exercise/3-form/Exercise3";
import SplitComponent from "../exercise/4-split-component/Exercise4";
// Markdown
import { ReactComponent as StylesMarkdown } from "../exercise/1-style/Exercise1.md";
import { ReactComponent as ShoppingListMarkdown } from "../exercise/2-list/Exercise2.md";
import { ReactComponent as FormMarkdown } from "../exercise/3-form/Exercise3.md";
import { ReactComponent as SplitComponentMarkdown } from "../exercise/4-split-component/Exercise4.md";
// Exercise 1
import Solution1Exercise1 from "../solution/1-1";
import Solution1Exercise2 from "../solution/1-2";
import Solution1Exercise3 from "../solution/1-3";
import Solution1Exercise4 from "../solution/1-4";
import Solution1Exercise5 from "../solution/1-5";
// Exercise 2
import Solution2Exercise1 from "../solution/2-1";
import Solution2Exercise2 from "../solution/2-2";
import Solution2Exercise3 from "../solution/2-3";
import Solution2Exercise4 from "../solution/2-4";
import Solution2Exercise5 from "../solution/2-5";
// Exercise 3
import Solution3Exercise1 from "../solution/3-1";
import Solution3Exercise2 from "../solution/3-2";
import Solution3Exercise3 from "../solution/3-3";
import Solution3Exercise4 from "../solution/3-4";
import Solution3Exercise5 from "../solution/3-5";
// Exercise 4
import Solution4Exercise1 from "../solution/4-1";
import Solution4Exercise2 from "../solution/4-2";
import Solution4Exercise3 from "../solution/4-3";

export const EXERCISES = [
  {
    name: "1-style",
    parts: {
      exercise: <Styles />,
      md: <StylesMarkdown />,
      solutions: [
        <Solution1Exercise1 key={1} />,
        <Solution1Exercise2 key={2} />,
        <Solution1Exercise3 key={3} />,
        <Solution1Exercise4 key={4} />,
        <Solution1Exercise5 key={5} />,
      ],
    },
  },
  {
    name: "2-basic-list",
    parts: {
      exercise: <ShoppingList />,
      md: <ShoppingListMarkdown />,
      solutions: [
        <Solution2Exercise1 key={1} />,
        <Solution2Exercise2 key={2} />,
        <Solution2Exercise3 key={3} />,
        <Solution2Exercise4 key={4} />,
        <Solution2Exercise5 key={5} />,
      ],
    },
  },
  {
    name: "3-form",
    parts: {
      exercise: <Form />,
      md: <FormMarkdown />,
      solutions: [
        <Solution3Exercise1 key={1} />,
        <Solution3Exercise2 key={2} />,
        <Solution3Exercise3 key={3} />,
        <Solution3Exercise4 key={4} />,
        <Solution3Exercise5 key={5} />,
      ],
    },
  },
  {
    name: "4-split-component",
    parts: {
      exercise: <SplitComponent />,
      md: <SplitComponentMarkdown />,
      solutions: [
        <Solution4Exercise1 key={1} />,
        <Solution4Exercise2 key={1} />,
        <Solution4Exercise3 key={1} />,
      ],
    },
  },
];
