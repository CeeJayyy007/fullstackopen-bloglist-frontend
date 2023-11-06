import Title from "./Title";

// add new blog
const CreateBlogForm = ({
  handleCreateBlog,
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange,
  title,
  author,
  url,
}) => {
  return (
    <div>
      <Title title="Create new blog" />
      <form onSubmit={handleCreateBlog}>
        <div>
          Title:
          <input value={title} onChange={handleTitleChange} />
        </div>

        <div>
          Author:
          <input value={author} onChange={handleAuthorChange} />
        </div>

        <div>
          URL:
          <input value={url} onChange={handleUrlChange} />
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
