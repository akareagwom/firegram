import { Box, FormControl } from "@mui/material";
import React from "react";
import {useState} from 'react'
import AddIcon from '@mui/icons-material/Add';

const UploadForm = () => {
    const [file,setFile] = useState(null);
    const [error, setError] = useState(null)

    const types = ['image/png','image/jpg','image/jpeg','image/gif','image/avif']

    const changeHandler = (e)=>{
        let selected = e.target.files[0];
        console.log(selected)
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        }else{
            setFile(null);
            setError('whose ya mate?');
        }
    }

    return ( 
        <>
        <FormControl
        sx={{

        }}
        >
            <label>
                <Box sx={{
                    display:"none",
                    bgcolor: 'warning.light',
                     visibilty:"none",
                    
                     
                     }}>
                    <input  type="file" onChange={changeHandler}/>
                </Box>
            <Box
            sx={{
                alignItems: 'center',
                alignContent: 'center',
                marginLeft: '40%'
           }} >
            <Box
            border="1px solid black"
            >
                <span>
                    <AddIcon
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}/>
                </span>
            </Box>
          
            </Box>
            </label>
            <Box className="output">
                {error && <Box className="">{error}</Box>}
                 {file && <Box>{file.name}</Box>}
            </Box>
        </FormControl>
        </>
     );
}
 
export default UploadForm;



