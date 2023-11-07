import Title from "./Title";
import { useState } from "react";

// add new blog
const CreateBlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const handleCreateBlog = (event) => {
    event.preventDefault();

    createBlog({
      title: title,
      author: author,
      url: url,
    });

    setTitle("");
    setAuthor("");
    setUrl("");
  };

  return (
    <div>
      <Title title="Create new blog" />
      <form onSubmit={handleCreateBlog}>
        <div>
          Title:
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>

        <div>
          Author:
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>

        <div>
          URL:
          <input value={url} onChange={({ target }) => setUrl(target.value)} />
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
