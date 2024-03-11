import React,{useState} from 'react';
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from '@mui/material'

import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css' 


const Navbar = () => {
  const [mobuilkeOpen,setMobileOpen]=useState(false)
  const handelDrawerToggle=()=>{
    setMobileOpen(!mobuilkeOpen)
  }

  const drawer=(
    <Box onClick={handelDrawerToggle} sx={{textAlign:'center', width:"200px"}}>
       <Typography sx={{flexGrow:1}} variant='h6' component={'div'} >
            <RestaurantIcon/>
            My Restraunt
          </Typography>
          <Divider/>
          {/* <Box sx={{display:{xs:"none",sm:"block"}}}> */}
            <ul className='mobile-navigation'>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/menu'}>Menu</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
          {/* </Box> */}
    </Box>
  )
   
  return (
    <>
      <Box>
        <AppBar sx={{bgcolor:'red'}} component={'nav'}>

          <Toolbar >
            <IconButton color='green' 
            aria-label="open drawer" edge="start"
            sx={{mr:2,display:{sm:"none"}}} 
            onClick={handelDrawerToggle}           
            >
              <MenuOutlinedIcon/>
            </IconButton>
          <Typography sx={{flexGrow:1}} variant='h6' component={'div'} >
            <RestaurantIcon/>
            My Restraunt
          </Typography>
          <Box sx={{display:{xs:"none",sm:"block"}}}>
            <ul className='navigation-menu'>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/menu'}>Menu</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
          </Box>
          </Toolbar>
        </AppBar>
        <Box component={'nav'}>
          <Drawer variant="temporary" open={mobuilkeOpen} onClose={handelDrawerToggle} sx={{xs:"block" , sm:"none",alignItems:'center'}}>
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
