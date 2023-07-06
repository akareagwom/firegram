import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import UploadForm from '../components/uploadForm';
// import Button from '@mui/material/Button';

const Redirect = () => {
    return ( 
    <>
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{bgcolor:'warning.light'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Firegram
          </Typography>
          <Button sx={{color:'whitesmoke'}} >logout</Button>
        </Toolbar>
      </AppBar>
      <Box
      sx={{
        marginLeft:'50%'
      }}
      >
        <UploadForm />
      </Box>
      
    </Box>
        </>
     );
}
 
export default Redirect;