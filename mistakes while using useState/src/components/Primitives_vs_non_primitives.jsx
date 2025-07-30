
import React, { useState } from "react";

const Primitives_vs_non_primitives = () => {
  console.log("Component rendering...");

  //When you update a primitive value with the same value, React won’t re-render the component — because it does a shallow comparison and sees no change.

  // const [price, setPrice] = useState(0);
  // setPrice(0); // No re-render (same primitive value)

  
  const [price, setPrice] = useState({
    number: 100,
    totalPrice: true,
  });



  ///Even though the values inside the object haven't changed, React sees this as a new object reference, so it re-renders the component.
  const handleChange = () => {
    setPrice({
      number: 100,
      totalPrice: true, // React sees this as a new object → triggers re-render
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <button
        onClick={handleChange}
        className="bg-[#4f46e5] px-4 py-2 rounded text-white font-semibold"
      >
        Click me
      </button>
    </div>
  );
};

export default Primitives_vs_non_primitives;
