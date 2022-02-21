import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import useRegion from "../../hooks/UseRegion";

type RegionSearchProps = {
  selectionChanged: (value: string) => void;
};

const RegionSearch = (props: RegionSearchProps) => {
  const regions = useRegion();
  const { selectionChanged } = props;
  if (regions.isLoading || !regions.data) {
    return (
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  }

  return (
    <Autocomplete
      id="regionsearch"
      options={regions.data}
      sx={{ width: "100%" }}
      onChange={(_, v) => {
        if (v != null) selectionChanged(v);
      }}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label="Region"
        />
      )}
    />
  );
};
export default RegionSearch;
