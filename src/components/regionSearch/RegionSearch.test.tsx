import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import RegionSearch from "./RegionSearch";

describe("RegionSearch", () => {
  test("renders the regions in a dropdown", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <RegionSearch
          selectionChanged={(value: string) => {
            // eslint-disable-next-line no-console
            console.log(value);
          }}
        />
      </QueryClientProvider>
    );

    await waitFor(async () => (await screen.getByTitle("Open")).click());

    expect(await screen.findByText("Africa")).toBeInTheDocument();
    expect(await screen.findByText("Americas")).toBeInTheDocument();
    expect(await screen.findByText("Asia")).toBeInTheDocument();
    expect(await screen.findByText("Europe")).toBeInTheDocument();
    expect(await screen.findByText("Oceania")).toBeInTheDocument();
  });

  // test('can select a country from the list', async () => {
  //   let country = {
  //     name: {
  //       common: '',
  //       official: ''
  //     },
  //     translatedName: {
  //       common: '',
  //       official: ''
  //     },
  //     nativeNames: [
  //       {
  //         common: '',
  //         official: ''
  //       }
  //     ],
  //     flagUrl: '',
  //     popDensity: 0
  //   } as Country;

  //   const callBack = (value: Country): void => {
  //     country = value;
  //   };

  //   render(
  //     <QueryClientProvider client={new QueryClient()}>
  //       <RegionSearch selectionChanged={callBack} region="region" />
  //     </QueryClientProvider>
  //   );

  //   expect(await screen.findByText('commonA')).toBeInTheDocument();
  //   expect(await screen.findByText('commonB')).toBeInTheDocument();
  //   expect(await screen.findByText('commonC')).toBeInTheDocument();

  //   await waitFor(async () => (await screen.getByText('commonA')).click());

  //   expect(country.name.common).toEqual('commonA');
  // });
});
