import { FaSearch } from "react-icons/fa";

const Searching = () => {
  return (
    <div className="relative">
      <input className="pt-2 pl-4 pr-4 pb-2 focus:outline-[#00B5AD] bg-gray-100 rounded-md" type="text" placeholder="search something" />
      <button><FaSearch className="absolute right-4 top-3 hover:text-[#00B5AD]" /></button>
    </div>
  )
}

export default Searching