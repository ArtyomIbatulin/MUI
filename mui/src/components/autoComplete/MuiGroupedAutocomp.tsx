import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { top100Films } from "./dbFilms";

const MuiGroupedAutocomp = () => {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  // One time slot every 30 minutes.
  const timeSlots = Array.from(new Array(24 * 2)).map(
    (_, index) =>
      `${index < 20 ? "0" : ""}${Math.floor(index / 2)}:${
        index % 2 === 0 ? "00" : "30"
      }`
  );

  return (
    <>
      <Autocomplete
        id="grouped-demo"
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        sx={{ width: 350, pt: 5, pl: 20 }}
        renderInput={(params) => (
          <TextField {...params} label="With categories" />
        )}
      />
      <Autocomplete
        id="disabled-options-demo"
        options={timeSlots}
        getOptionDisabled={(option) =>
          option === timeSlots[0] || option === timeSlots[2]
        }
        sx={{ width: 350, pt: 5, pl: 20 }}
        renderInput={(params) => (
          <TextField {...params} label="Disabled options" />
        )}
      />
    </>
  );
};

export default MuiGroupedAutocomp;
