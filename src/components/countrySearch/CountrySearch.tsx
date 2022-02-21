import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import useCountry from "../../hooks/UseCountry";
import { Country } from "../../entities/country";

type CountrySearchProps = {
  selected?: Country;
  selectionChanged: (value: Country) => void;
  region: string;
};

const CountrySearch = (props: CountrySearchProps) => {
  const { selectionChanged, region, selected } = props;
  const countries = useCountry(region, "jpn");

  if (countries.isLoading || !countries.data) {
    return (
      <Box sx={{ width: "100%" }}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Box>
    );
  }

  return (
    <List>
      {countries.data.map((x) => (
        <ListItem
          key={x.name.common}
          disablePadding
          selected={selected ? selected.name.common === x.name.common : false}
        >
          <ListItemButton onClick={() => selectionChanged(x)}>
            <ListItemText primary={x.name.common} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
export default CountrySearch;
CountrySearch.defaultProps = {
  selected: null,
};
