import React from 'react'
import { Box, Button, Card,CardContent, Typography } from "@mui/material";


const Profile = () => {
    return (  
        <>
        <Box 
        display={'flex'}
        justifyContent={'space-between'}
        >
            
        <Box>
            <img style={{width:"600px",height:'500px'}} src="profile.png"/>
                
        </Box>
        <Card style={{
            backgroundColor: "#F2E9E4",
            width:"600px",height:'500px',
            borderRadius:"0px",
            display:"flex",
            flexDirection:"column",
            justifyContent:'center'
        }}
            bgcolor={'#F2E9E4'}>
            <CardContent
            style={{
                width:"80%"
            }}
             bgcolor={'#F2E9E4'}>
                <image   height={'200px'} src="profile.png"/>
                <Typography textAlign={'center'} variant="h5" component="h2">About Us</Typography>
                <Typography textAlign={'center'} variant="p" component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ac nibh nullam feugiat. Accumsan vestibulum varius arcu posuere orci vitae sagittis posuere vitae.</Typography>
                <Button
                size="large"
                
                bgcolor="black"
                style={{ backgroundColor:"black", color:"white",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"25px",paddingRight:"25px"}} 
                >Let's Chat</Button>
            </CardContent>

        </Card>
        </Box>
        </>
    );
}
 
export default Profile;