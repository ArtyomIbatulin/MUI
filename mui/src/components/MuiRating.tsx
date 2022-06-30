import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const MuiRating = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        pt: 5,
        pl: 20,
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        precision={0.5}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly precision={0.5} />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled precision={0.5} />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} precision={0.5} />
    </Box>
  );
};

export default MuiRating;
