import { Button } from '@mui/material';
import {auth,provider} from './config';
import {signInWithPopup} from "firebase/auth"

const SignIn = () => {
    const handleClick=() => {
        signInWithPopup(auth,provider).then((data)=>{

        });
    }
    return ( 
        <>
        <Button onClick={handleClick}>SignIn With Google</Button>
        </>
     );
}
 
export default SignIn;