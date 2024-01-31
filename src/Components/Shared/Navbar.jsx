import { NavLink } from 'react-router-dom';
import { LuBrainCircuit } from "react-icons/lu";

const Navbar = () => {
    const navItems = (
<div className="lg:flex gap-6 font-semibold text-black">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 border-b-[3px] pb-1 border-[transparent] "
            : "text-black border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-blue-500 duration-300"
        }
        to="/"
      >
        <li>HOME</li>
      </NavLink>
      <NavLink
      to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 border-b-[3px] pb-1 border-[transparent] "
            : "text-black border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-blue-500 duration-300"
        }
      >
        <li>About</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 border-b-[3px] pb-1 border-[transparent] "
            : "text-black border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-blue-500 duration-300"
        }
        to="/courses"
      >
        <li>Courses</li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "block md:hidden  text-blue-500 border-b-[3px] pb-1 border-[transparent] "
            : "block md:hidden  text-black border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-blue-500 duration-300"
        }
        to="/blogs"
      >
        <li>Blogs</li>
      </NavLink>
    </div>
    )
    return (
        <div className="navbar bg-base-100 px-2 md:px-10 lg:px-[100px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"> <LuBrainCircuit className="text-4xl text-blue-800"/> E-Learning</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Get Started</a>
        </div>
      </div>
    );
};

export default Navbar;