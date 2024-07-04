import Link from "next/link";
import Image from "next/image";
import ClickOutside from "@/components/Common/ClickOutside";
import { UserContext } from "@/context/user-context";
import { paths } from "@/paths";
import { useContext, useState } from "react";
import { authClient } from "@/libs/auths/client";
import { useRouter } from "next/navigation";

const DropdownUser = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useContext(UserContext);

  const handleLogout = async () => {
    console.log("logout");
    await authClient.logout();
    // Refresh the auth state
    await user.checkSession?.();
    router.replace(paths.auth.signIn);
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
      >
        <span className="hidden text-right text-white lg:block">
          <span className="block text-sm font-medium">
            {user.user.username}
          </span>
          <span className="block text-xs">{user.user.role}</span>
        </span>

        <span className="h-12 w-12 rounded-full hover:animate-tada">
          <Image
            width={112}
            height={112}
            src="/images/blog/author-01.png"
            alt="User"
          />
        </span>
        {/* <span className="h-4 w-4">
          <Image
            width={16}
            height={16}
            src="/images/icons/arrow-down.svg"
            alt="Arrow Down Icon"
            className={`transform ${dropdownOpen ? "rotate-180" : ""} transition-transform duration-300`}
          />
        </span> */}
      </div>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute mt-4 flex w-64 flex-col rounded-lg border border-stroke bg-white shadow-2xl dark:border-strokedark dark:bg-dark`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-6 dark:border-strokedark">
            <li>
              <Link
                href={paths.home}
                className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-primary text-black dark:text-white"
              >
                <span className="w-[22px] h-[22px]">
                  <Image
                    width={22}
                    height={22}
                    src="/images/icons/user.svg"
                    alt="User Icon"
                    className="dark:filter dark:invert dark:sepia-0 dark:saturate-0 dark:hue-rotate-0 dark:brightness-100 dark:contrast-100"
                  /></span>
                My Profile
              </Link>
            </li>
          </ul>
          <button className="flex items-center gap-3 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary text-black dark:text-white" onClick={handleLogout}>
            <span className="w-[22px] h-[22px]">
              <Image
                width={22}
                height={22}
                src="/images/icons/logout.svg"
                alt="Logout Icon"
                className="dark:filter dark:invert dark:sepia-0 dark:saturate-0 dark:hue-rotate-0 dark:brightness-100 dark:contrast-100"
              /></span>
            Log Out
          </button>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </ClickOutside>
  );
};

export default DropdownUser;
