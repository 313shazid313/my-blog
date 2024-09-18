const Navbar = () => {
  return (
    <div>
      <div className="flex justify-end p-2 ">
        <ul>
          <li className="inline-block pr-4 pl-5 ">topG</li>
          <li className="inline-block pr-4 pl-5">topG</li>
          <li className="inline-block pr-4 pl-5">topG</li>
          <li className="inline-block pr-4 pl-5">topG</li>
        </ul>
      </div>
      <hr className="border-gray" />

      <div>
        <ul className="flex justify-start p-2">
          <li className="text-2xl ">myBlog</li>
          <li className="inline-block pr-4 pl-5 ">topg</li>
          <li className="inline-block pr-4 pl-5 ">topg</li>
          <li className="inline-block pr-4 pl-5 ">topg</li>
          <li className="inline-block pr-4 pl-5 ">topg</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
