import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Blog from "./Blog";

describe("<Blog />", () => {
  let container;
  let mockHandler;

  beforeEach(() => {
    const blog = {
      title: "Component testing is done with react-testing-library",
      author: "Frank Mckinley",
      url: "https://blog.test.com",
      likes: 5,
      user: {
        username: "test",
        name: "test",
        id: "60b5b4c9a8a4c51c3c2c6c2d",
      },
    };

    mockHandler = jest.fn();

    container = render(
      <Blog blog={blog} updateLikes={mockHandler} />
    ).container;
  });

  test("renders content", () => {
    const blogDiv = container.querySelector(".blogDiv");

    const element = screen.getByText(
      "Component testing is done with react-testing-library | Frank Mckinley"
    );

    expect(blogDiv).toBeDefined();
  });

  test("renders title and author but not url and likes", () => {
    const titleDiv = container.querySelector(".titleDiv");
    const blogDetailsDiv = container.querySelector(".blogDetailsDiv");

    expect(titleDiv.textContent).toContain(
      "Component testing is done with react-testing-library"
    );
    expect(titleDiv).not.toHaveStyle("display: none");
    expect(blogDetailsDiv).toHaveStyle("display: none");
  });

  test("clicking the show buttons shows url and likes", async () => {
    const blogDetailsDiv = container.querySelector(".blogDetailsDiv");
    expect(blogDetailsDiv).toHaveStyle("display: none");

    const user = userEvent.setup();
    const button = screen.getByText("view");
    await user.click(button);

    const urlDiv = container.querySelector(".urlDiv");

    expect(blogDetailsDiv).not.toHaveStyle("display: none");
    expect(urlDiv.textContent).toContain("https://blog.test.com");
  });

  test("clicking the button calls event handler twice", async () => {
    const user = userEvent.setup();
    const button = screen.getByText("view");
    await user.click(button);

    const likeButton = screen.getByText("like");
    await user.click(likeButton);
    await user.click(likeButton);

    expect(mockHandler.mock.calls).toHaveLength(2);
  });
});
