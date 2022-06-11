import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import LoginIcon from '@mui/icons-material/Login';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import {useState} from 'react'

export const MuiButton = () => {

  const [formats, setFormats] = useState<string[]>([]);

  console.log(formats);

  const handleFormatChange = (
    _event : React.MouseEvent<HTMLElement>,
    updatedFormats : string[]
  ) => {
    setFormats(updatedFormats)
  };
 

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
            <Stack  direction='row' spacing={2}>
              <ToggleButtonGroup 
               aria-label='toggleButtonGroup'
               value = {formats} 
               onChange = {handleFormatChange}
              >
                <ToggleButton value="bold" aria-label="bold format"><FormatBoldIcon/></ToggleButton>
                <ToggleButton value="italic" aria-label="italic format"><FormatItalicIcon/></ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined format"><FormatUnderlinedIcon/></ToggleButton>
              </ToggleButtonGroup>
            </Stack>
        </Stack>
    </div>
  )
}
