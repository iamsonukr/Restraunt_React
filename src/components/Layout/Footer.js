import { Typography,Box} from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { red } from '@mui/material/colors';
function Footer() {
  return (
    <>
    <Box sx={{textAlign:"center",bgcolor:'#1A1A19', color:'white',p:'4px', paddingBottom:"1px"}}>
        <Box 
        sx={{
            size:'100px',
            my:'1px', 
            "& svg":{
                fontSize:'60px',
            cursor:'pointer',
            colors:red,
            "@media(max-width:600px)":{fontSize:"30px",}
        },
        "& svg:hover":{
            color:"Yellow",
            transform:'translateX(2px)',
            transition:'600ms',

        }
        
        }}>
            {/* icon */}
            <InstagramIcon/>
            <TwitterIcon/>

        </Box>
      <Typography sx={{"@media(max-width:600px)":{fontSize:"1rem",}}}>All rights Reserved &copy; This is sample</Typography>
    </Box>
    </>
  )
}

export default Footer
