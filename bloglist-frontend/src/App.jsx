import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs.js";
import loginService from "./services/login.js";
import loginForm from "./components/Form";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({ username, password });
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      console.log("wrong credentials");
    }
  };

  console.log("user", user);

  if (user === null) {
    return loginForm(handleLogin, setUsername, setPassword, username, password);
  }

  return (
    <div>
      <div>
        <h2>blogs</h2>
        <p>
          <strong>{user.name}</strong> logged in
        </p>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default App;
