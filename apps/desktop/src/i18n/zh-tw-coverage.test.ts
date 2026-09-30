import { describe, expect, it } from "vitest";
import {
  PRODUCT_LOCALES,
  PRODUCT_MESSAGES,
  productText,
} from "./product";
import {
  CONNECTIONS_TOOLS_MESSAGES,
  connectionsToolsText,
} from "./connections-tools";
import {
  RUNNER_CAPABILITIES_MESSAGES,
  runnerCapabilitiesText,
} from "./runner-capabilities";
import { shellText } from "./runtime-shell";

describe("Traditional Chinese coverage", () => {
  it("keeps every array-backed catalog aligned with the locale list", () => {
    expect(PRODUCT_LOCALES).toContain("zh-TW");
    for (const values of Object.values(PRODUCT_MESSAGES)) {
      expect(values).toHaveLength(PRODUCT_LOCALES.length);
    }
    for (const values of Object.values(CONNECTIONS_TOOLS_MESSAGES)) {
      expect(values).toHaveLength(PRODUCT_LOCALES.length);
    }
    for (const values of Object.values(RUNNER_CAPABILITIES_MESSAGES)) {
      expect(values).toHaveLength(PRODUCT_LOCALES.length);
    }
  });

  it("does not fall back to English for zh-TW product and tool surfaces", () => {
    expect(productText("zh-TW", "projects")).toBe("專案");
    expect(productText("zh-TW", "fileAccess")).toBe("檔案存取");
    expect(connectionsToolsText("zh-TW", "addConnection")).toBe("新增連線");
    expect(runnerCapabilitiesText("zh-TW", "authorize")).toBe("授權 Runner 能力");
    expect(shellText("zh-TW", "Documentation")).toBe("說明文件");
    expect(shellText("zh-TW", "Check for updates")).toBe("檢查更新");
  });
});
