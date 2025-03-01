import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import ProfilePanel from "../components/ProfilePanel";

const ChatPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get("http://localhost:5000/api/users/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    const fetchLoggedInUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get(`http://localhost:5000/api/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLoggedInUser(response.data);
      } catch (error) {
        console.error("Error fetching logged-in user:", error);
      }
    };

    fetchUsers();
    fetchLoggedInUser();
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <ChatWindow selectedUser={selectedUser} userId={userId} setIsProfileOpen={setIsProfileOpen} />
      <ProfilePanel isProfileOpen={isProfileOpen} setIsProfileOpen={setIsProfileOpen} loggedInUser={loggedInUser} />
    </div>
  );
};

export default ChatPage;
