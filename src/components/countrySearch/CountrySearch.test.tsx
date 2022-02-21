import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { Country } from "../../entities/country";
import CountrySearch from "./CountrySearch";

describe("CountrySearch", () => {
  test("renders the countries in a list", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <CountrySearch
          selectionChanged={(value: Country) => {
            // eslint-disable-next-line no-console
            console.log(value);
          }}
          region="region"
        />
      </QueryClientProvider>
    );

    expect(await screen.findByText("commonA")).toBeInTheDocument();
    expect(await screen.findByText("commonB")).toBeInTheDocument();
    expect(await screen.findByText("commonC")).toBeInTheDocument();
  });

  test("can select a country from the list", async () => {
    let country = {
      name: {
        common: "",
        official: "",
      },
      translatedName: {
        common: "",
        official: "",
      },
      nativeNames: [
        {
          common: "",
          official: "",
        },
      ],
      flagUrl: "",
      popDensity: 0,
    } as Country;

    const callBack = (value: Country): void => {
      country = value;
    };

    render(
      <QueryClientProvider client={new QueryClient()}>
        <CountrySearch selectionChanged={callBack} region="region" />
      </QueryClientProvider>
    );

    expect(await screen.findByText("commonA")).toBeInTheDocument();
    expect(await screen.findByText("commonB")).toBeInTheDocument();
    expect(await screen.findByText("commonC")).toBeInTheDocument();

    await waitFor(async () => (await screen.getByText("commonA")).click());

    expect(country.name.common).toEqual("commonA");
  });
});
