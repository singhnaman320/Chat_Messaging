import { useState, useEffect } from "react";
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";

const ChatWindow = ({ selectedUser, userId, setIsProfileOpen }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (!selectedUser) return;

    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:5000/api/messages/${selectedUser._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [selectedUser]);

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedUser) return;

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/messages/send",
        { sender: userId, receiver: selectedUser._id, content: newMessage },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setNewMessage("");

      const response = await axios.get(
        `http://localhost:5000/api/messages/${selectedUser._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessages(response.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="w-3/4 flex flex-col bg-[#f6f6f6]">
      {selectedUser ? (
        <>
          <div className="w-full flex flex-col">
            {selectedUser ? (
              <>
                <div className="p-2 flex justify-between items-center drop-shadow-md bg-white">
                  <span className="text-lg font-bold rounded">{selectedUser.name}</span>
                  <button
                    onClick={() => setIsProfileOpen(true)}
                    className="px-3 py-1 bg-gray-400 text-white rounded"
                  >
                    View Profile
                  </button>
                </div>
              </>
            ) : (
              <p className="text-center flex-1 flex items-center justify-center">
                Select a user to start chatting
              </p>
            )}
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2 mr-10">
            {messages.length > 0 ? (
              messages.map((msg) => (
                <div
                  key={msg._id}
                  className={`flex ${
                    msg.sender._id === userId ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-3 max-w-xs rounded-lg shadow ${
                      msg.sender._id === userId
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    <p>{msg.content}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No messages yet</p>
            )}
          </div>
          <div className="p-2 flex w-5/6 bg-white m-auto drop-shadow-lg rounded">
            <input
              type="text"
              className="flex-1 p-2 rounded"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-4 py-2 text-[#8babd8] rounded"
            >
              <SendIcon/>
            </button>
          </div>
        </>
      ) : (
        <p className="text-center flex-1 flex items-center justify-center">
          Select a user to start chatting
        </p>
      )}
    </div>
  );
};

export default ChatWindow;
