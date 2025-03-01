import { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/logo.svg";

const Sidebar = ({ users, selectedUser, setSelectedUser }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-1/4 p-4">
      <div className="flex items-center space-x-2 mb-4">
        <img src={logo} alt="Chat Logo" className="h-8" />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 mb-4 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <li
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`p-2 cursor-pointer hover:bg-gray-200 ${
                selectedUser && selectedUser._id === user._id ? "bg-gray-300" : ""
              }`}
            >
              {user.name}{" "}
              {user.unreadMessages > 0 && (
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                  {user.unreadMessages}
                </span>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
