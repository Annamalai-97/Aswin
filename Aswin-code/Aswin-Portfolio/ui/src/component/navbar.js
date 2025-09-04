import React from "react";

const Navbar = () => (
  <nav className="flex justify-between p-4 bg-gray-800 shadow-md">
    <h1 className="text-xl font-bold">Aswin Kanagaraj</h1>
    <ul className="flex space-x-6">
      {["Home", "About", "Projects", "Contact"].map((item) => (
        <li key={item}>
          <a href={`#${item.toLowerCase()}`} className="hover:text-teal-400">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
