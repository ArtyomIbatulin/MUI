import { Stack, TextField } from "@mui/material"

export const MuiTextField = () => {
  return (
    <div>
        <Stack 
         justifyContent="center"
         alignItems="center"
         marginTop='20px'
         spacing={3}>
            <Stack direction="row" spacing={2}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </Stack>
        </Stack>
    </div>
  )
}
