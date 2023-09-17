import { useState } from "react";
import Link from "../Link/Link";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
const NavBar = () => {
  const [open, setOpen] = useState(true);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="text-green-400 p-6">
      <div
        className="md:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open === true ? (
          <RiMenuUnfoldLine className="text-3xl "></RiMenuUnfoldLine>
        ) : (
          <AiOutlineCloseCircle className="text-3xl text-end "></AiOutlineCloseCircle>
        )}
      </div>
      <ul
        className={`md:flex duration-1000 absolute  md:static bg-yellow-800 ${
          open ? "-top-60 " : "top-14"
        } `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
