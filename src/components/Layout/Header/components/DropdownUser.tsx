import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClickOutside from "@/components/Common/ClickOutside";
import { paths } from "@/paths";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Thomas Anree
          </span>
          <span className="block text-xs">UX Designer</span>
        </span>

        <span className="h-12 w-16 rounded-full">
          <Image
            width={112}
            height={112}
            src="/images/blog/author-01.png"
            alt="User"
          />
        </span>
        <span className="h-4 w-4">
          <Image
            width={16}
            height={16}
            src="/images/icons/arrow-down.svg"
            alt="Arrow Down Icon"
            className={`transform ${dropdownOpen ? "rotate-180" : ""} transition-transform duration-300`}
          />
        </span>
      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-64 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-6 dark:border-strokedark">
            <li>
              <Link
                href={paths.auth.signIn}
                className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base text-black dark:text-black"
              >
                <span className="w-[22px] h-[22px]">
                  <Image
                    width={22}
                    height={22}
                    src="/images/icons/user.svg"
                    alt="User Icon"
                  /></span>
                My Profile
              </Link>
            </li>
          </ul>
          <button className="flex items-center gap-3 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base text-black dark:text-black">
            <span className="w-[22px] h-[22px]">
              <Image
                width={22}
                height={22}
                src="/images/icons/logout.svg"
                alt="Logout Icon"
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
