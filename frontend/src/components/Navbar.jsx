import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-screen-xl mx-auto">
      <div className="flex justify-end p-3  border-b-4 ">
        <ul>
          <li className="inline-block pr-4 pl-5 border-r-2 cursor-pointer ">
            About Me
          </li>
          <li className="inline-block pr-4 pl-5 border-r-2 cursor-pointer">
            Github
          </li>
          <li className="inline-block pr-4 pl-5 border-r-2 cursor-pointer">
            Reddit
          </li>
          <li className="inline-block pr-4 pl-5 cursor-pointer">Contact</li>
        </ul>
      </div>
      {/* only for desktop */}
      <div className=" ">
        <ul className="flex items-center h-14">
          <li className="pr-8 pl-5 text-2xl cursor-pointer h-full flex items-center">
            <NavLink to="/">myBlog</NavLink>
          </li>
          <li className="pr-5 pl-5 hover:border-t-4 border-[#00B5AD] cursor-pointer h-full flex items-center">
            <NavLink to="/">Linux</NavLink>
          </li>
          <li className="pr-5 pl-5 hover:border-t-4 border-[#00B5AD] cursor-pointer h-full flex items-center">
            <NavLink to="/">Bugs</NavLink>
          </li>
          <li className="pr-5 pl-5 hover:border-t-4 border-[#00B5AD] cursor-pointer h-full flex items-center">
            <NavLink to="/">DSA</NavLink>
          </li>
          <li className="pr-5 pl-5 hover:border-t-4 border-[#00B5AD] cursor-pointer h-full flex items-center">
          <NavLink to="/"></NavLink>
          </li>
        </ul>
      </div>
      {/* only for mobile */}
      <div className="hidden">
        <h1>mobile</h1>
      </div>
    </nav>
  );
};

export default Navbar;
