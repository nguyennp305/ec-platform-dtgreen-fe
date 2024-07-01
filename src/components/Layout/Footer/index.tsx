"use client";
import Image from "next/image";
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";

const footerData = {
  companyInfo: {
    name: "Company",
    description1:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
  },
  categories: [
    {
      title: "Category",
      items: ["News", "World", "Games", "References"],
    },
    {
      title: "Cherry",
      items: ["Web", "eCommerce", "Business", "Entertainment", "Portfolio"],
    },
    {
      title: "Apples",
      items: ["Media", "Brochure", "Nonprofit", "Educational", "Projects"],
    },
    {
      title: "Business",
      items: ["Infopreneur", "Personal", "Wiki", "Forum"],
    },
  ],
  socialLinks: [
    {
      href: "/",
      icon: <GoogleIcon />,
    },
    {
      href: "/",
      icon: <InstagramIcon />,
    },
    {
      href: "/",
      icon: <FacebookIcon />,
    },
  ],
};

const Footer = () => {
  return (
    <div className="relative mt-16 bg-green-550">
      <svg
        className="absolute top-0 -mt-5 h-6 w-full text-green-550 sm:-mt-10 sm:h-16"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="mx-auto px-4 pt-12 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="row-gap-10 mb-8 grid gap-16 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title={footerData.companyInfo.name}
              className="inline-flex items-center"
            >
              <Image
                src="/images/logo/dt_green_white_logo.png"
                alt="logo"
                className="w-full h-[75px]"
                width={140}
                height={30}
                priority
              />
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-deep-purple-50 text-sm">
                {footerData.companyInfo.description1}
              </p>
            </div>
          </div>
          <div className="row-gap-8 grid grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4">
            {footerData.categories.map((category, index) => (
              <div key={index}>
                <p className="text-teal-accent-400 font-semibold tracking-wide">
                  {category.title}
                </p>
                <ul className="mt-2 space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href="/"
                        className="text-deep-purple-50 hover:text-teal-accent-400 transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-deep-purple-accent-200 flex flex-col justify-center border-t pb-10 pt-5 sm:flex-row">
          <div className="mt-4 flex items-center space-x-4 sm:mt-0">
            {footerData.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-deep-purple-100 hover:text-teal-accent-400 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
