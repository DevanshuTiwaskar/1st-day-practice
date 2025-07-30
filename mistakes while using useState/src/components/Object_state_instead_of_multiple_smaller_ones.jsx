import React, { useState } from 'react'

const Object_state_instead_of_multiple_smaller_ones = () => {

    const [form, setForm] = useState({
       name: "",
       lastname: "",
       city: "",
       address: "",
       pincode: "",
       age: "",
     });



     console.log(form)
   
     const handleChange = (e) => {
       setForm((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
       }));
     };
   
     return (
       <div className="flex items-center justify-center m-10">
        {/* Added more input fields */}
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
                placeholder="Enter your lastname"
                name="lastname"
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
                placeholder="Enter your address"
                name="address"
                onChange={handleChange}
            />
            <input
                className="bg-gray-200 p-2 rounded"
                type="text"
                placeholder="Enter your pincode"
                name="pincode"
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
            <p>Name: {form.name}</p>
            <p>Lastname: {form.lastname}</p>
            <p>City: {form.city}</p>
            <p>Address: {form.address}</p>
            <p>Pincode: {form.pincode}</p>
            <p>Age: {form.age}</p>
        </div>
         
       </div>
     );
  
}

export default Object_state_instead_of_multiple_smaller_ones