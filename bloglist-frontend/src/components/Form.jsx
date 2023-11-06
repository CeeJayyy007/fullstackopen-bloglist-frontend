import Title from "./Title";
import Notification from "./Notification";

// login form
const loginForm = (
  handleLogin,
  setUsername,
  setPassword,
  username,
  password,
  errorMessage,
  error
) => {
  return (
    <div>
      <Title title="Log in to application" />
      {errorMessage && <Notification message={errorMessage} error={error} />}
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

// add new blog
const createBlogForm = (
  handleCreateBlog,
  setTitle,
  setAuthor,
  setUrl,
  title,
  author,
  url
) => {
  return (
    <div>
      <Title title="Create new blog" />
      <form onSubmit={handleCreateBlog}>
        <div>
          Title:
          <input
            type="text"
            value={title}
            name="title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>

        <div>
          Author:
          <input
            type="text"
            value={author}
            name="author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>

        <div>
          URL:
          <input
            type="text"
            value={url}
            name="url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export { loginForm, createBlogForm };
