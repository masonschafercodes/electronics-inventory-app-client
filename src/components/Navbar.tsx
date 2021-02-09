function Navbar() {
  return (
    <div>
      <div className="flex items-center flex-col content-center bg-white sticky top-0 justify-center shadow-md pt-8 pr-3 pl-3 pb-8 font-sans border border-r-4">
        <a href="https://www.zingashome.com/indianapolis/" target="_blank">
          <img
            src="https://www.zingashome.com/wp-content/uploads/2020/06/zingas-logo.jpg"
            alt="zingas logo"
            className="w-56 text-center"
          />
        </a>
        <h1 className="text-center text-xl text-blue-500">
          Inventory Dashboard
        </h1>
        <div className="flex flex-row pt-1">
          <a
            href="/add-user"
            className="text-center text-md p-1 text-red-500 hover:underline"
          >
            Add User
          </a>
          <a
            href="/add-device"
            className="text-center text-md p-1 text-red-500 hover:underline"
          >
            Add Device
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
