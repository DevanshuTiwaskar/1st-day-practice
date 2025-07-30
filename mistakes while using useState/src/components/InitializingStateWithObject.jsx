import React, { useEffect, useState } from "react";

const InitializingStateWithObject = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/post/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  },[]);

  return (
    <div className="w-full h-[100vh]  p-20">
      {loading ? (
        "loading..."
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default InitializingStateWithObject;
