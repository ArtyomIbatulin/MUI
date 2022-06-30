import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const MuiAnInputs = () => {
  return (
    <>
      <Stack direction="row" sx={{ pt: 3, pl: 20 }}>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked color="secondary" />
        <Checkbox {...label} defaultChecked color="success" />
        <Checkbox {...label} defaultChecked color="default" />
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
        />
      </Stack>

      <Stack direction="row" sx={{ pt: 3, pl: 20 }}>
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
        <Checkbox
          {...label}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
        />
      </Stack>

      <Stack direction="row" sx={{ pt: 3, pl: 20 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Label placement</FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="top"
              control={<Checkbox />}
              label="Top"
              labelPlacement="top"
            />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              label="Start"
              labelPlacement="start"
            />
            <FormControlLabel
              value="bottom"
              control={<Checkbox />}
              label="Bottom"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="End"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </Stack>
    </>
  );
};

export default MuiAnInputs;
