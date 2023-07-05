import { Box, FormControl } from "@mui/material";
import React from "react";
import {useState} from 'react'

const UploadForm = () => {
    const [file,setFile] = useState(null);
    const [error, setError] = useState(null)

    const types = ['image/png','image/jpg','image/jpeg','image/gif','image/avif']

    const changeHandler = (e)=>{
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected)
        }else{
            setFile(null);
            setError('whose ya mate?');
        }
    }

    return ( 
        <>
        <FormControl>
            <input type="file" onChange={changeHandler}/>
            <Box className="output">
                {error && <Box className="">{error}</Box>}
            </Box>
        </FormControl>
        </>
     );
}
 
export default UploadForm;



