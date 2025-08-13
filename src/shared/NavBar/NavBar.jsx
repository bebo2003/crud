export const NavBar = () => {
  return (
    <nav className="navbar ">
      <div className="shadow-sm">
        <form className="flex justify-between gap-6 w-full p-2" role="search">
          <input
            className="outline-0 form-control me-2 border border-neutral-300 focus:border-neutral-500 rounded-md p-2
            focus:flex-1 transition-all duration-300"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
};
