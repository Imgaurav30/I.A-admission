import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    dob: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3030/api/v1/studentLogin", formData);
      alert("LoginIN successful");
      navigate("/form");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row bg-richblack-100 items-center justify-center">
      <div className=" w-full md:w-1/2 mt-8 mb-8">
        <h2 className="text-center text-3xl text-richblack-800">
          Please login to admission
        </h2>
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 md:max-w-[450px] rounded-md p-[30px] mx-auto flex flex-col gap-2 shadow-md"
        >
          <div>
            <label className="font-medium text-lg text-richblack-800">
              OFSS Reference ID:
            </label>
            <input
              type="text"
              name="studentId"
              onChange={handleChange}
              required
              className="w-full border border-blue-400 rounded-md p-2 mt-2"
            />
          </div>
          {/* <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} required  className='w-full border border-blue-400 rounded-md p-2 mt-2' />
        </div> */}
          <div>
            <label className="text-richblack-800">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              required
              className="w-full border border-blue-400 rounded-md p-2 mt-2"
            />
          </div>
          {/* <div>
          <label>Mobile Number:</label>
          <input type="text" name="mobile" onChange={handleChange} required  className='w-full border border-blue-400 rounded-md p-2 mt-2' />
        </div> */}
          {/* <div>
          <label className='font-medium text-sm'>Gender:</label>
          <select name="gender" id="gender" className='w-full border border-blue-400 rounded-md p-2 mt-2' onChange={handleChange}
            required>
                 <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
          </select>
        </div> */}
          <div className="flex items-center justify-center mt-2">
            <button
              className="py-2 px-4 w-[100%] transition ease-in-out delay-150 bg-richblack-25 text-black rounded-xl font-bold hover:bg-richblack-900 hover:text-richblack-25 duration-300 "
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
