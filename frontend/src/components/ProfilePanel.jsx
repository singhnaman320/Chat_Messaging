import avatar from "../assets/avatar.jpg";

const ProfilePanel = ({ isProfileOpen, setIsProfileOpen, loggedInUser }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-1/4 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
        isProfileOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <button
          onClick={() => setIsProfileOpen(false)}
          className="absolute top-2 right-2 px-3 py-1 bg-gray-300 rounded"
        >
          X
        </button>
        {loggedInUser && (
          <div className="text-center">
            <img src={avatar} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h2 className="text-lg font-bold">{loggedInUser.name}</h2>
            <p className="text-gray-600">{loggedInUser.mobile}</p>
            <p className="text-gray-600">{loggedInUser.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePanel;
