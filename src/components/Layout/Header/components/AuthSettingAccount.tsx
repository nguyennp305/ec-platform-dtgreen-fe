"use client";

import Link from "next/link";
import ThemeToggler from "../ThemeToggler";
import { paths } from "@/paths";
import { UserContext } from "@/context/user-context";
import { useContext, useEffect, useState } from "react";
import DropdownUser from "./DropdownUser";

export const AuthSettingAccount = () => {
  const user = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user.user !== undefined) {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) {
    return;
  }

  return (
    <>
      <div className="flex items-center">
        {!user.user ? (
          <>
            <Link
              href={paths.auth.signIn}
              className="w-32 px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white"
            >
              Sign In
            </Link>
            <Link
              href={paths.auth.signUp}
              className="h-12 w-32 mr-4 rounded-lg bg-green-750 py-3 text-center text-base font-medium text-white shadow-btn transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-btn-hover"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <DropdownUser />
        )}

        <div>
          <ThemeToggler />
        </div>
      </div>
    </>
  );
};
