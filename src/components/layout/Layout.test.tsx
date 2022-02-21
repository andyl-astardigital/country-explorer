import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  test("Renders header and content", () => {
    render(
      <Layout appBarChildren={<div>Header</div>}>
        <div>Content</div>
      </Layout>
    );

    // the layout makes two copies of the header for the responsive drawer
    expect(screen.getAllByText("Header")).toHaveLength(2);
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Country Explorer")).toBeInTheDocument();
  });
});
