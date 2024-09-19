const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-end p-3  border-b-4 ">
        <ul>
          <li className="inline-block pr-4 pl-5 border-r-2 cursor-pointer ">
            topG
          </li>
          <li className="inline-block pr-4 pl-5 border-r-2 cursor-pointer">
            topG
          </li>
          <li className="inline-block pr-4 pl-5 border-r-2 cursor-pointer">
            topG
          </li>
          <li className="inline-block pr-4 pl-5 cursor-pointer">topG</li>
        </ul>
      </div>

      <div className="mb-6">
        <ul className="flex items-center h-14">
          <li className="pr-4 pl-5 text-2xl cursor-pointer h-full flex items-center">
            myBlog
          </li>
          <li className="pr-5 pl-5 hover:border-t-4 border-[#00B5AD] cursor-pointer h-full flex items-center">
            topg
          </li>
          <li className="pr-5 pl-5 hover:border-t-4 border-[#00B5AD] cursor-pointer h-full flex items-center">
            topg
          </li>
          <li className="pr-5 pl-5 hover:border-t-4 border-[#00B5AD] cursor-pointer h-full flex items-center">
            topg
          </li>
          <li className="pr-5 pl-5 hover:border-t-4 border-[#00B5AD] cursor-pointer h-full flex items-center">
            topg
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
