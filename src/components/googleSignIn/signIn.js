import { Button } from '@mui/material';
import {auth,provider} from './config';
import {signInWithPopup} from "firebase/auth"
import { useEffect, useState } from 'react';
import Redirect from '../../pages/redirect';
import LandingPage from '../../pages/landingPage';

const SignIn = () => {
    const [value, setValue] = useState("");

    const handleClick=() => {
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        });
    }

    // useEffect(()=>{
    //     setValue=(localStorage.getItem("email"))
    // })

    return ( 
        <>
        {value?<Redirect/>:<Button onClick={handleClick}>SignIn With Google</Button>}
        
        </>
     );
}
 
export default SignIn;