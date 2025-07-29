import React, { useState } from "react";

const Updating_object_state = () => {
  const [user, setUser] = useState({
    name: "",
    city: "",
    age: "",
  });
  console.log(user)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center m-10">
      <form className="flex flex-col gap-5">
        <input
          className="bg-gray-200 p-2 rounded"
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={handleChange}
        />
        <input
          className="bg-gray-200 p-2 rounded"
          type="text"
          placeholder="Enter your city"
          name="city"
          onChange={handleChange}
        />
        <input
          className="bg-gray-200 p-2 rounded"
          type="text"
          placeholder="Enter your age"
          name="age"
          onChange={handleChange}
        />
      </form>

      <div className="ml-10">
        <h2 className="font-bold text-lg">User Info:</h2>
        <p>Name: {user.name}</p>
        <p>City: {user.city}</p>
        <p>Age: {user.age}</p>
      </div>
    </div>
  );
};

export default Updating_object_state;
