import { FormControl } from "@mui/material";
import React from "react";

const UploadForm = () => {

    const changeHandler = (e)=>{
        let selected
    }

    return ( 
        <>
        <FormControl>
            <input type="file" onChange={changeHandler}/>
        </FormControl>
        </>
     );
}
 
export default UploadForm;



