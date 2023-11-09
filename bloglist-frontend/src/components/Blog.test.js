import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Blog from "./Blog";

describe("<Blog />", () => {
  let container;

  beforeEach(() => {
    const blog = {
      title: "Component testing is done with react-testing-library",
      author: "Frank Mckinley",
      ur: "https://blog.test.com",
      likes: 5,
      user: {
        username: "test",
        name: "test",
        id: "60b5b4c9a8a4c51c3c2c6c2d",
      },
    };

    container = render(<Blog blog={blog} />).container;
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
    const urlDiv = container.querySelector(".blogDetailsDiv");

    expect(titleDiv.textContent).toContain(
      "Component testing is done with react-testing-library"
    );
    expect(titleDiv).not.toHaveStyle("display: none");
    expect(urlDiv).toHaveStyle("display: none");
  });
});
