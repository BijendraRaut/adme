const Navbar = () => {
  return (
    <>
      <div className="font-landypix text-4xl font-black tracking-wider text-white transition-all duration-300 ease-linear hover:text-gray-400 p-2">
        <a href="#">
          <h1>Tech Pixels</h1>
        </a>
      </div>
      <div className="flex items-center justify-center space-x-10 text-white">
        <ul className="hidden items-center justify-center space-x-6 text-lg font-normal md:flex ">
          <li className="transition-all duration-300 ease-linear hover:text-gray-400">
            {" "}
            <a href="/explore"> Explore </a>
          </li>
          <li className="transition-all duration-300 ease-linear hover:text-gray-400">
            {" "}
            <a href="/premium">Premium </a>
          </li>
          <li className="transition-all duration-300 ease-linear hover:text-gray-400">
            {" "}
            <a href="/upload"> Upload </a>
          </li>
        </ul>
        <button className="rounded-md bg-white py-2 px-5 text-lg text-black md:py-3 ">
          Join Us
        </button>
      </div>
    </>
  );
};

export default Navbar;
