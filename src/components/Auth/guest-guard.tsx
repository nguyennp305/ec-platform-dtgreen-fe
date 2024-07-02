"use client";

import { paths } from "@/paths";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useUser } from "@/hooks/user-user";

export interface GuestGuardProps {
  children: React.ReactNode;
}

export function GuestGuard({
  children,
}: GuestGuardProps): React.JSX.Element | null {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  const [isChecking, setIsChecking] = React.useState<boolean>(true);

  const checkPermissions = async (): Promise<void> => {
    if (isLoading) {
      return;
    }
    if (error) {
      setIsChecking(false);
      return;
    }
    if (user) {
      console.log("[GuestGuard]: User is logged in, redirecting to home");
      router.replace(paths.home);
      return;
    }

    setIsChecking(false);
  };

  React.useEffect(() => {
    checkPermissions().catch(() => {
      // noop
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
  }, [user, error, isLoading]);

  if (isChecking) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <React.Fragment>{children}</React.Fragment>;
}
