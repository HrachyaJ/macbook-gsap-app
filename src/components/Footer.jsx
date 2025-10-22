import { footerLinks } from "../constants/index.js";

const Footer = () => {
  return (
    <footer className="container mx-auto py-6 md:py-8 px-4 sm:px-5 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
        <p className="text-xs sm:text-sm font-medium text-gray-400 max-w-xl">
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 000800 040 1966.
        </p>
        <img
          src="/logo.svg"
          alt="Apple logo"
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
      </div>

      <hr className="my-5 md:my-6 border-zinc-800" />

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-5">
        <p className="text-xs sm:text-sm text-gray-400">
          Copyright © 2025 Apple Inc. All rights reserved.
        </p>

        <ul className="flex flex-col sm:flex-row sm:flex-wrap lg:divide-x divide-zinc-700 gap-2 sm:gap-3 lg:gap-0 text-xs sm:text-sm">
          {footerLinks.map(({ label, link }, index) => (
            <li
              key={label}
              className={`text-gray-400 hover:text-blue-500 transition-colors duration-300 cursor-pointer ${
                index !== 0 ? "lg:pl-4 lg:pr-4" : "lg:pr-4"
              }`}
            >
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
