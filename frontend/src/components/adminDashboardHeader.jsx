import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminDashboardHeader() {
  const navigate = useNavigate();

  const handlelogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/logout');
      localStorage.setItem("users", null);
      console.log(response);
      navigate('/'); // Redirects to the home page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="header">
      <h1 className="title">Admin DashBoard</h1>
      <button className="logout-btn" onClick={handlelogout}>
        <MdOutlineLogout /> Logout
      </button>
    </header>
  );
}

export default AdminDashboardHeader;
