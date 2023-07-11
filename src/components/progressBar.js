import React from "react";
import UseStorage from "./hooks/useStorage";
import { Box } from "@mui/material";

const ProgressBar = ({file,setFile}) => {
    const {url, progress} = UseStorage(file);
    console.log(progress,url);
    return ( 
       <Box 
       sx={{width: progress + '%'}}
        >progress</Box>
     );
}
 
export default ProgressBar;