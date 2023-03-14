import { createFragment } from "../stateManager/fragment";

export const DisplayedWindow = createFragment<"Production" | "Development">(
  "Production"
);

export const searchValue = createFragment<string>("");
