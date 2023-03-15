import { createFragment } from "../stateManager/fragment";

export const DisplayedWindowFragment = createFragment<
  "Production" | "Development"
>("Production");

export const searchValueFragment = createFragment<string>("");
