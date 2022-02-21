import { Divider, Stack } from "@mui/material";
import { useState } from "react";
import { Country } from "../../entities/country";
import CountrySearch from "../countrySearch/CountrySearch";
import Layout from "../layout/Layout";
import RegionSearch from "../regionSearch/RegionSearch";
import CountryView from "../countryView/CountryView";

const App = () => {
  const [region, setRegion] = useState<string>();
  const [country, setCountry] = useState<Country>();

  return (
    <Layout
      appBarChildren={
        <Stack spacing={2}>
          <RegionSearch selectionChanged={setRegion} />
          {region ? (
            <>
              <Divider />
              <CountrySearch
                selected={country}
                region={region}
                selectionChanged={setCountry}
              />
            </>
          ) : (
            <div />
          )}
        </Stack>
      }
    >
      {country ? <CountryView country={country} /> : ""}
    </Layout>
  );
};

export default App;
