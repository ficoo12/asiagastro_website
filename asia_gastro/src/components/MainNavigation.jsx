import { NavLink } from "react-router-dom";
import Logo from "../../public/logo.png";
import { useState } from "react";

function MainNavigation() {
  const [menu, setMenu] = useState(false);
  const closeMenu = () => setMenu(false);
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <img src={Logo} alt="Asia Gastro Logo" className="h-12"></img>
        <nav>
          <ul className="space-x-6 hidden md:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `uppercase hover:text-[rgba(167,146,97,0.8)] transition-all ease-in duration-200 hover:cursor-pointer ${isActive ? "text-[rgba(167,146,97,0.8)]" : "hover:text-[rgba(167,146,97,0.8)]"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `uppercase hover:text-[rgba(167,146,97,0.8)] transition-all ease-in duration-200 hover:cursor-pointer ${isActive ? "text-[rgba(167,146,97,0.8)]" : "hover:text-[rgba(167,146,97,0.8)]"}`
                }
              >
                products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className={({ isActive }) =>
                  `uppercase hover:text-[rgba(167,146,97,0.8)] transition-all ease-in duration-200 hover:cursor-pointer ${isActive ? "text-[rgba(167,146,97,0.8)]" : "hover:text-[rgba(167,146,97,0.8)]"}`
                }
              >
                brands
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `uppercase hover:text-[rgba(167,146,97,0.8)] transition-all ease-in duration-200 hover:cursor-pointer ${isActive ? "text-[rgba(167,146,97,0.8)]" : "hover:text-[rgba(167,146,97,0.8)]"}`
                }
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `uppercase hover:text-[rgba(167,146,97,0.8)] transition-all ease-in duration-200 hover:cursor-pointer ${isActive ? "text-[rgba(167,146,97,0.8)]" : "hover:text-[rgba(167,146,97,0.8)]"}`
                }
              >
                contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setMenu(!menu)}
          id="menu-btn"
          class="md:hidden focus:outline-none"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {menu && (
        <ul className="md:hidden bg-white px-4 pb-4 text-center space-y-10">
          <li>
            <NavLink
              onClick={closeMenu}
              to="/"
              className={({ isActive }) =>
                `uppercase hover:text-[rgba(167,146,97,0.8)] transition-all ease-in duration-200 hover:cursor-pointer ${isActive ? "text-[rgba(167,146,97,0.8)]" : "hover:text-[rgba(167,146,97,0.8)]"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              onClick={closeMenu}
              className={({ isActive }) =>
                `uppercase hover:text-[rgba(167,146,97,0.8)] transition-all ease-in duration-200 hover:cursor-pointer ${isActive ? "text-[rgba(167,146,97,0.8)]" : "hover:text-[rgba(167,146,97,0.8)]"}`
              }
            >
              products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/brands"
              onClick={closeMenu}
              className={({ isActive }) =>
                `uppercase hover:text-[rgba(167,146,97,0.8)] transition-all ease-in duration-200 hover:cursor-pointer ${isActive ? "text-[rgba(167,146,97,0.8)]" : "hover:text-[rgba(167,146,97,0.8)]"}`
              }
            >
              brands
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `uppercase hover:text-[rgba(167,146,97,0.8)] transition-all ease-in duration-200 hover:cursor-pointer ${isActive ? "text-[rgba(167,146,97,0.8)]" : "hover:text-[rgba(167,146,97,0.8)]"}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `uppercase hover:text-[rgba(167,146,97,0.8)] transition-all ease-in duration-200 hover:cursor-pointer ${isActive ? "text-[rgba(167,146,97,0.8)]" : "hover:text-[rgba(167,146,97,0.8)]"}`
              }
            >
              contact
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
}
export default MainNavigation;
