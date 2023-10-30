import { Facebook, Image, Twitter } from "@mui/icons-material"
import { Tabs,Tab,Typography, Box, ImageListItem } from "@mui/material"
import React from "react"
import { Instagram } from "react-feather"

export const NavBar =()=>{
    return(
        <Box
        style={{backgroundColor: "#F2E9E4"}} 
        padding={0}
        margin={0}
        bgcolor={'#F2E9E4'}>
            <Tabs variant="fullWidth" textColor="#F2E9E4">
                <Tab>

                </Tab>
                <Facebook/>
                <Twitter/>
                <Instagram/>
                <ImageListItem src ="" />
                <Tab label="Home"/>
                <Tab label="About"/>
                <Typography variant="h4" component="h2">
                SAJIN TAMG
                </Typography>
                <Tab label="Services"/>
                <Tab label="Contact"/>
                <Tab label="Search"/>
            </Tabs>
        </Box>

    )
} 