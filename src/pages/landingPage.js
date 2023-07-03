import * as React from 'react';
import Button from '@mui/material/Button';
import SignIn from '../components/googleSignIn/signIn';

export default function LandingPage() {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
      <SignIn/>
    </div>
  );
}
