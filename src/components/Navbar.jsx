import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center">
      <nav className="flex w-full max-w-[1120px] justify-between items-center">
        <img src="/logo.svg" alt="Apple logo" />

        <ul className="flex flex-1 justify-center max-sm:hidden">
          {navLinks.map(({ label }) => (
            <li
              key={label}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              <a href={`#${label.toLowerCase()}`}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
          <img src="/search.svg" alt="Search" className="cursor-pointer" />
          <img src="/cart.svg" alt="Cart" className="cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
