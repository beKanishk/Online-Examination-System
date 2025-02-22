import { useState } from "react";
import axios from "axios";

export default function AuthForm({ isRegister }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    profilePic: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isRegister
        ? "http://localhost:3000/userLogin/register"
        : "http://localhost:3000/userLogin/login";
      const { data } = await axios.post(url, formData);

      alert(data.message); // Show success/failure message
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center">
        User  {isRegister ? "Register" : "Login"}
        </h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {isRegister && (
            <>Name:
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              /><br/><br/>
              Role:
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
              <br/><br/>
              Profile Picture URL:
              <input
                type="text"
                name="profilePic"
                placeholder="Profile Picture URL"
                value={formData.profilePic}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              /><br/><br/>
            </>
          )}
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          /><br/><br/>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          /><br/><br/>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {isRegister ? "Register" : "Login"}
          </button>
          <br/><br/>
        </form>
      </div>
    </div>
  );
}
