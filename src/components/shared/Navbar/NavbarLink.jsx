import { NavLink } from "react-router-dom";

const NavbarLink = () => {
  return (
    <div className="space-x-5">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/all-classes"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline" : ""
        }
      >
        All classes 
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline" : ""
        }
      >
        Sign In
      </NavLink>
    </div>
  );
};

export default NavbarLink;
