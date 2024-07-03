"use client";

import Link from "next/link";
import ThemeToggler from "../ThemeToggler";
import { paths } from "@/paths";
import { UserContext } from "@/context/user-context";
import { useContext, useEffect, useState } from "react";
import DropdownUser from "./DropdownUser";

export const AuthSettingAccount = () => {
  const user = useContext(UserContext);
  console.log('yser', user)

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-end pr-16 lg:pr-0">
        <Link
          href={paths.auth.signIn}
          className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
        >
          Sign In
        </Link>
        <Link
          href={paths.auth.signUp}
          className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 bg-green-750"
        >
          Sign Up
        </Link>
        <div>
          <ThemeToggler />
        </div>
        <DropdownUser />
      </div>
    </>
  )
}
