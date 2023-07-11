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
import UploadForm from '../components/uploadForm';

  

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
      {/* <SignIn/>       */}
      <UploadForm/>
    </Box>
  );
}





