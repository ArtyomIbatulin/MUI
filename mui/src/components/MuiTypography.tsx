import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">h1 headers</Typography>
        <Typography variant="h2">h2 headers</Typography>
        <Typography variant="h3">h3 headers</Typography>
        <Typography variant="h4" component='h1' gutterBottom>h4 headers</Typography>
        <Typography variant="h5">h5 headers</Typography>
        <Typography variant="h6">h6 headers</Typography>

        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>

        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
    </div>
  )
}
