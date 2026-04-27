import { describe, it, expect, vi } from "vitest";
import { clearWorkspaceStorage } from "./storage-cleanup";

describe("clearWorkspaceStorage", () => {
  it("removes all workspace-scoped keys for given wsId", () => {
    const adapter = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    };

    clearWorkspaceStorage(adapter, "ws_123");

    expect(adapter.removeItem).toHaveBeenCalledWith("dispatch_issue_draft:ws_123");
    expect(adapter.removeItem).toHaveBeenCalledWith("dispatch_issues_view:ws_123");
    expect(adapter.removeItem).toHaveBeenCalledWith("dispatch_issues_scope:ws_123");
    expect(adapter.removeItem).toHaveBeenCalledWith("dispatch_my_issues_view:ws_123");
    expect(adapter.removeItem).toHaveBeenCalledWith("dispatch:chat:selectedAgentId:ws_123");
    expect(adapter.removeItem).toHaveBeenCalledWith("dispatch:chat:activeSessionId:ws_123");
    expect(adapter.removeItem).toHaveBeenCalledWith("dispatch:chat:drafts:ws_123");
    expect(adapter.removeItem).toHaveBeenCalledWith("dispatch:chat:expanded:ws_123");
    expect(adapter.removeItem).toHaveBeenCalledWith("dispatch_navigation:ws_123");
    expect(adapter.removeItem).toHaveBeenCalledTimes(9);
  });
});
