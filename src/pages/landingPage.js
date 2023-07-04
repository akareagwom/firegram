import * as React from 'react';
import Button from '@mui/material/Button';
import SignIn from '../components/googleSignIn/signIn';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Background from '../images/background.avif';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from '@mui/material/styles';

  

export default function LandingPage() {
  const theme = useTheme();
  const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
  return (
    <Box>
      {/* <img src={Background} width={"100%"} height={"100px"} alt='asset'/> */}
      <Card sx={{ width: '30%' }} >
       <CardContent>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Word of the Day
         </Typography>
         <Typography variant="h5" component="div">
           be{bull}nev{bull}o{bull}lent
         </Typography>
         <Typography sx={{ mb: 1.5 }} color="text.primary">
           adjective
         </Typography>
         <Typography variant="body2">
           well meaning and kindly.
           <br />
           {'"a benevolent smile"'}
         </Typography>
       </CardContent>
       <CardActions>
       <SignIn/>
       </CardActions>
     </Card>
     

    {/* <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card> */}

      
    </Box>
  );
}





