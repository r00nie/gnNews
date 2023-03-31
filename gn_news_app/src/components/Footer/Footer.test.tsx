import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Footer from "./Footer";

describe("Footer", () => {
  const mockStore = configureStore([]);
  const mockState = {
    articles: [
      {
        id: 1,
        title: "Article 1",
        content: "This is the content for article 1.",
      },
      {
        id: 2,
        title: "Article 2",
        content: "This is the content for article 2.",
      },
      {
        id: 3,
        title: "Article 3",
        content: "This is the content for article 3.",
      },
    ],
  };

  it("renders the current number of articles and current time", () => {
    render(
      <Provider store={mockStore(mockState)}>
        <Footer />
      </Provider>
    );

    const articlesNumberText = screen.getByText(/Current number of articles:/i);
    const currentTimeText = screen.getByText(/Current Time:/i);

    expect(articlesNumberText).toBeInTheDocument();
    expect(currentTimeText).toBeInTheDocument();
  });

  it("displays the correct number of articles", () => {
    render(
      <Provider store={mockStore(mockState)}>
        <Footer />
      </Provider>
    );

    const articlesNumber = screen.getByText(
      mockState.articles.length.toString()
    );

    expect(articlesNumber).toBeInTheDocument();
  });
});
