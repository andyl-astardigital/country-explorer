import React from "react";
import { render, screen } from "@testing-library/react";
import CountryView from "./CountryView";

describe("CountryView", () => {
  test("Renders country details", () => {
    render(
      <CountryView
        country={{
          name: {
            common: "common",
            official: "official",
          },
          translatedName: {
            common: "translated common",
            official: "translated official",
          },
          nativeNames: [
            {
              common: "native common",
              official: "native official",
            },
          ],
          flagUrl: "",
          popDensity: 1020,
        }}
      />
    );

    expect(screen.getByText("common")).toBeInTheDocument();
    expect(screen.getByText("official")).toBeInTheDocument();

    expect(
      screen.getByText("In Japanese: translated common")
    ).toBeInTheDocument();
    expect(
      screen.getByText("In Japanese: translated official")
    ).toBeInTheDocument();

    expect(screen.getByText("native common")).toBeInTheDocument();
    expect(screen.getByText("native official")).toBeInTheDocument();

    expect(screen.getByText("Population density: 1020")).toBeInTheDocument();
  });
});
