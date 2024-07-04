"use client";

import Link from "next/link";
import ThemeToggler from "../ThemeToggler";
import { useTheme } from "next-themes";
import { paths } from "@/paths";
import { UserContext } from "@/context/user-context";
import { useContext, useEffect, useState } from "react";
import DropdownUser from "./DropdownUser";
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from '@mui/material/colors';

export const AuthSettingAccount = () => {
  const user = useContext(UserContext);
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user.user !== undefined) {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) {
    return;
  }

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <>
      <div className="flex items-center">
        {!user.user ? (
          <>
            <Link
              href={paths.auth.signIn}
              className="w-32 px-7 py-3 text-base font-medium text-white hover:opacity-70 dark:text-white"
            >
              Sign In
            </Link>
            <Link
              href={paths.auth.signUp}
              className="h-12 w-32 mr-4 rounded-lg bg-gray-400 py-3 text-center text-base font-medium text-white shadow-btn transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-btn-hover"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <div className="mr-4 flex flex-nowrap items-center gap-4">
            <DropdownUser />
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon sx={{ color: theme === "light" ? pink[100] : pink[300] }} />
              </StyledBadge>
            </IconButton>
          </div>
        )}
        <div>
          <ThemeToggler />
        </div>
      </div>
    </>
  );
};
