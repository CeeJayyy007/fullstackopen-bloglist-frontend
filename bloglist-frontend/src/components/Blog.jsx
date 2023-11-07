import { useState } from "react";

const Blog = ({ blog }) => {
  const [view, setView] = useState(false);

  const blogStyle = {
    padding: "10px 0px 10px 5px",
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const handleView = () => {
    setView(!view);
    console.log("button clicked");
  };

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} | {blog.author}{" "}
        <button onClick={handleView}>{view ? "hide" : "view"}</button>
      </div>

      <div style={{ display: view ? " " : "none" }}>
        <div>{blog.url}</div>
        <div>
          {blog.likes}
          {"   "}
          <button>like</button>
        </div>
        {blog.user.name}
      </div>
    </div>
  );
};

export default Blog;
