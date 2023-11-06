import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs.js";
import loginService from "./services/login.js";
import { loginForm, createBlogForm } from "./components/Form";
import Title from "./components/Title";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, [blogs]);

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem("loggedInUser");

    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  // login handler
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({ username, password });

      window.localStorage.setItem("loggedInUser", JSON.stringify(user));

      blogService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      console.log("wrong credentials");
    }
  };

  // create blog handler
  const handleCreateBlog = async (event) => {
    event.preventDefault();

    const newBlog = {
      title: title,
      author: author,
      url: url,
    };

    try {
      const blog = await blogService.create(newBlog);

      setBlogs(blogs.concat(blog));
    } catch (exception) {
      console.log("error creating blog");
    }
  };

  // logout handler
  const handleLogout = () => {
    window.localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  if (user === null) {
    return loginForm(handleLogin, setUsername, setPassword, username, password);
  }

  return (
    <div>
      <div>
        <Title title="Blogs" />
        <p>
          <strong>{user.name}</strong> logged in{" "}
          <button onClick={handleLogout}>Logout</button>
        </p>

        {createBlogForm(
          handleCreateBlog,
          setTitle,
          setAuthor,
          setUrl,
          title,
          author,
          url
        )}
        <br />
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default App;
