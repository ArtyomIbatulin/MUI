import { Stack, Button, IconButton, ButtonGroup } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import LoginIcon from '@mui/icons-material/Login';

export const MuiButton = () => {
  return (
    <div>
        <Stack 
         justifyContent="center"
         alignItems="center"
         marginTop='20px'
         spacing={3}>
            <Stack direction="row" spacing={2}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            </Stack>


            <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary">primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="error">error</Button>
            <Button variant="contained" color="info">info</Button>
            <Button variant="contained" color="success">success</Button>
            <Button variant="contained" color="warning">warning</Button>
            </Stack>

            <Stack display='block' direction="row" spacing={2}>
                <Button variant='contained' color='primary' size='small'>small</Button>
                <Button variant='contained' color='primary' size='medium'>medium</Button>
                <Button variant='contained' color='primary' size='large'>large</Button>
            </Stack>

            <Stack direction='row' spacing={2}>
              <Button variant='contained' color='primary' startIcon={<SendIcon />}disableRipple>Send</Button>
              <Button variant='contained' color='primary' endIcon={<SendIcon />}disableElevation>Send</Button>
              <Button 
              variant='contained' 
              color='secondary' 
              startIcon={<LoginIcon />}
              onClick={()=>{alert('Click')}}
              >
                Login
                </Button>
              <Button variant='contained' color='success' endIcon={<LoginIcon />}>Login</Button>
              <IconButton aria-label="send"  color='success'>
                <SendIcon/>
              </IconButton>
            </Stack>
            <Stack  direction='row' spacing={2}>
              <ButtonGroup variant='outlined' orientation='vertical' size='small' color='secondary' aria-label="button group" >
                <Button onClick={()=>{alert('Left')}}>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </Stack>
        </Stack>
    </div>
  )
}
