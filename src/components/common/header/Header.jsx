"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menu from "./menu";
import "animate.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { MdPhoneCallback } from "react-icons/md";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const [openSubIndex, setSubOpenIndex] = useState(-1);

  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  const handleSubSubmenu = (index) => {
    if (openSubIndex === index) {
      setSubOpenIndex(-1);
    } else {
      setSubOpenIndex(index);
    }
  };
  const usePathName = usePathname();
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });
  return (
    <div
      className={`overflow-x-clip header left-0 z-40 top-0 w-full items-center bg-gradient-to-r font-semibold ${
        sticky
          ? "fixed z-[20] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : ""
      }`}
    >
      <header className="flex justify-around bg-primary text-white overflow-x-clip">
        <div className="container flex items-center">
          <div className=" flex items-center w-full justify-center lg:flex-grow">
            <div>
              <Link
                href="/"
                className={`header-logo block lg:ml-0 ml-2 mt-3 bg-white lg:my-3 lg:hidden`}
              >
                <Image
                  src="/logo/logo.png"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-[250px] m-4"
                />
              </Link>
            </div>
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className=" rounded-full px-3 py-[6px] ring-primary lg:hidden"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300  ${
                  navbarOpen ? " top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300  ${
                  navbarOpen ? " top-[-8px] -rotate-45" : ""
                }`}
              />
            </button>
            <nav
              id="navbarCollapse"
              className={`navbar absolute right-0 z-30 rounded px-6 py-4 duration-300 dark:bg-dark lg:visible lg:static w-full lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                navbarOpen
                  ? `visibility ${
                      sticky ? "top-[60%]" : "top-[10%]"
                    }  opacity-100`
                  : "invisible top-[120%] opacity-0"
              }`}
            >
              <ul className="block lg:grid grid-cols-9 gap-2 relative bg-primary">
                {menu.map((menuItem, index) => (
                  <li
                    onMouseEnter={() => handleSubmenu(menuItem.id)}
                    onMouseLeave={() => {
                      handleSubmenu(-1);
                      handleSubSubmenu(-1);
                    }}
                    key={index}
                    className={`group relative text-center ${
                      usePathName === menuItem.path
                        ? "bg-lightgreen"
                        : "text-dark hover:bg-lightgreen"
                    }`}
                  >
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`flex py-2 px-2 text-sm lg:mr-0 lg:inline-flex lg:px-0 lg:py-3 `}
                      >
                        <div>{menuItem.title}</div>
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => {
                            handleSubmenu(menuItem.id);
                          }}
                          className="px-2 flex cursor-pointer items-center justify-between py-2 text-sm text-dark group-hover:bg-lightgreen lg:mr-0 lg:inline-flex lg:px-0 lg:py-3"
                        >
                          {menuItem.title}
                          <IoMdArrowDropdown />
                        </p>
                        <div
                          className={`submenu relative left-0 top-full lg:ml-0 pl-4 rounded-sm transition-[top] duration-300 lg:absolute lg:top-[102%] lg:w-[250px] lg:p-4 bg-primary lg:shadow-lg ${
                            openIndex == menuItem.id ? "block" : "hidden"
                          }`}
                        >
                          {menuItem.submenu.map((submenuItem, index) => (
                            <div
                              key={index}
                              className="group text-left relative bg-primary grid"
                            >
                              {submenuItem.path ? (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className={`block rounded py-2 text-sm text-dark hover:bg-lightgreen lg:px-3`}
                                >
                                  {submenuItem.title}
                                </Link>
                              ) : (
                                <>
                                  <p
                                    onMouseEnter={() => {
                                      handleSubSubmenu(submenuItem.id);
                                    }}
                                    onClick={() => {
                                      handleSubSubmenu(submenuItem.id);
                                    }}
                                    className="rounded py-2 text-sm lg:px-3 flex cursor-pointer justify-between text-dark hover:bg-lightgreen"
                                  >
                                    {submenuItem.title}
                                    <span className="pl-3">
                                      <svg
                                        width="25"
                                        height="24"
                                        viewBox="0 0 25 24"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </span>
                                  </p>
                                  <div
                                    className={`lg:ml-[225px] rounded-sm bg-primary lg:px-3 lg:py-2 lg:-mt-6 ml-4 transition-[top] duration-300 lg:absolute lg:w-[250px] lg:shadow-lg ${
                                      openSubIndex === submenuItem.id
                                        ? "block"
                                        : "hidden"
                                    }`}
                                  >
                                    {submenuItem.submenu.map(
                                      (subsubmenuItem, index) => (
                                        <Link
                                          href={subsubmenuItem.path}
                                          key={index}
                                          className="bg-primary block rounded py-2.5 text-sm text-dark hover:bg-lightgreen lg:px-3"
                                        >
                                          {subsubmenuItem.title}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="lg:grid grid-cols-4 lg:px-10 bg-skyblue ">
        {/* grid 1 - logo */}
        <div className="lg:block hidden justify-center">
          <Link
            href="/"
            className={`header-logo block lg:ml-0 ml-2 mt-3 lg:my-3`}
          >
            <Image
              src="/logo/logo.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[350px]"
            />
          </Link>
        </div>
        {/* grid 2 - public notice button */}
        <div className="hidden lg:flex items-center justify-center py-5">
          <div className="flex items-center animate__animated shadow-lg  shadow-red-200 animate__slower animate__pulse animate__infinite">
            <Link
              href="/"
              className="bg-lightgreen px-4 py-2 rounded-md text-white border-white border-2 text-sm"
            >
              Public Notice
            </Link>
          </div>
        </div>
        {/* grid 3 - call details */}
        <div className="hidden lg:flex justify-center items-center">
          <div>
            <Link className="flex" href="tel:011-44795968">
              <MdPhoneCallback className="mt-1.5 mr-0.5 text-lightgreen" />
              Residence: 011-44795968
            </Link>
            <Link className="flex" href="tel:09873692675">
              <MdPhoneCallback className="mt-1.5 mr-0.5 text-lightgreen" />
              Mobile: 09873692675
            </Link>
            <Link className="flex" href="tel:011-30403040 ">
              <MdPhoneCallback className="mt-1.5 mr-0.5 text-lightgreen" />
              Office: 011-30403040
            </Link>
          </div>
        </div>

        {/* grid 4 - mail id and social links */}
        <div className="hidden lg:flex items-center justify-center py-3">
          <div>
            <Link className="flex" href="mailto:sunil.neph@gmail.com">
              <IoIosMail className="mt-1.5 text-lightgreen" />
              sunil.neph@gmail.com
            </Link>
            <Link className="flex" href="mailto:drsunilprakash@gmail.com">
              <IoIosMail className="mt-1.5 text-lightgreen" />
              drsunilprakash@gmail.com
            </Link>
            <div className="flex items-center justify-center space-x-4 mt-1">
              <Link
                href="https://www.facebook.com/TotalKidneySolutions"
                target="__blank"
                className="text-white"
              >
                <FaFacebookF className="px-1 bg-lightgreen" />
              </Link>
              <Link
                href="https://www.instagram.com/p/C_nKAkhhMhP/"
                target="__blank"
                className="text-white"
              >
                <FaInstagram className="px-1 bg-lightgreen" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sunil-prakash-50879112/"
                target="__blank"
                className="text-white"
              >
                <FaLinkedinIn className="px-1 bg-lightgreen" />
              </Link>
              <Link
                href="https://www.youtube.com/@drsunilprakash9685"
                target="__blank"
                className="text-white"
              >
                <FaYoutube className="px-1 bg-lightgreen" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
