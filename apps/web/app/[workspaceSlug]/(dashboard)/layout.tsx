"use client";

import { DashboardLayout } from "@dispatch/views/layout";
import { DispatchIcon } from "@dispatch/ui/components/common/dispatch-icon";
import { SearchCommand, SearchTrigger } from "@dispatch/views/search";
import { StarterContentPrompt } from "@dispatch/views/onboarding";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout
      loadingIndicator={<DispatchIcon className="size-6" />}
      searchSlot={<SearchTrigger />}
      extra={
        <>
          <SearchCommand />
          <StarterContentPrompt />
        </>
      }
    >
      {children}
    </DashboardLayout>
  );
}
