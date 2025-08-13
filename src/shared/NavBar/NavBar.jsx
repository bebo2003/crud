export const NavBar = () => {
  return (
    <nav className="navbar w-full bg-white shadow-sm">
    <div className="flex items-center justify-start p-2">
  
  {/* search */}
  <form className="flex-1 ml-10 sm:ml-10 sm:w-auto" role="search">
    <input
      type="search"
      placeholder="Search"
      aria-label="Search"
      className="w-full sm:w-64 outline-none border border-neutral-300 focus:border-neutral-500 rounded-md p-2 transition-all duration-300"
    />
  </form>
</div>

    </nav>
  );
};
