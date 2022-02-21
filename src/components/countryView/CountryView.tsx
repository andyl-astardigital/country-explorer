import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Divider, Grid } from "@mui/material";
import { Country } from "../../entities/country";

type CountryViewProps = {
  country: Country;
};

const CountryView = (props: CountryViewProps) => {
  const { country } = props;

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        image={country.flagUrl}
        alt={`${country.name.common}flag`}
      />
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              sx={{
                fontSize: 30,
              }}
            >
              {country.name.common}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom variant="body1" component="div">
              In Japanese: {country.translatedName.common}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom variant="body1" component="div">
              {country.name.official}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom variant="body1" component="div">
              In Japanese: {country.translatedName.official}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
            <Typography gutterBottom variant="body1" component="div">
              Native names
            </Typography>
          </Grid>

          {country.nativeNames.map((x) => (
            <Grid item xs={6} key={x.common}>
              <Typography gutterBottom variant="body1" component="div">
                <p>{x.common}</p>
                <p>{x.official}</p>
              </Typography>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Divider />
            <Typography gutterBottom variant="body1" component="div">
              Population density: {country.popDensity}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CountryView;
