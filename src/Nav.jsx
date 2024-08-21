import { useState } from "react";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header>
        <nav className="shadow">
          <div className="flex justify-between items-center py-6 px-10 container mx-auto">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">Adsla</h1>
            </div>

            <div>
              <div
                className="hover:cursor-pointer sm:hidden"
                onClick={toggleSidebar}
              >
                <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
              </div>
              <div className="flex items-center">
                <ul className="sm:flex space-x-4 hidden items-center">
                  <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md ">Home</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md ">About</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md ">Services</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md ">Products</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md ">Contact</a></li>
                </ul>

                <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                  <h1 className="text-text-gray-600 py-2 hover:cursor-pointer hover:text-indigo-600">LOGIN</h1>
                  <h1 className="text-text-gray-600 py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">SIGNUP</h1>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Offcanvas Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6 bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent">
            Menu
          </h2>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md">Services</a></li>
            <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md">Products</a></li>
            <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 "
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Navbar;