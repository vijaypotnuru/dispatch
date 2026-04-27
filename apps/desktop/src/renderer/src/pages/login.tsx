import { LoginPage } from "@dispatch/views/auth";
import { DragStrip } from "@dispatch/views/platform";
import { DispatchIcon } from "@dispatch/ui/components/common/dispatch-icon";

const WEB_URL = import.meta.env.VITE_APP_URL || "http://localhost:3000";

export function DesktopLoginPage() {
  const handleGoogleLogin = () => {
    // Open web login page in the default browser with platform=desktop flag.
    // The web callback will redirect back via dispatch:// deep link with the token.
    window.desktopAPI.openExternal(
      `${WEB_URL}/login?platform=desktop`,
    );
  };

  return (
    <div className="flex h-screen flex-col">
      <DragStrip />
      <LoginPage
        logo={<DispatchIcon bordered size="lg" />}
        onSuccess={() => {
          // Auth store update triggers AppContent re-render → shows DesktopShell.
          // Initial workspace navigation happens in routes.tsx via IndexRedirect.
        }}
        onGoogleLogin={handleGoogleLogin}
      />
    </div>
  );
}
