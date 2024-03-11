import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

function About() {
  return (
    <Layout>
      <Box sx={{
        my:14,
        textAlign:'center',
        marginBottom:"0px",
        "&h4":{fontWeight:"bold"},
        "&p":{textAlign:'center'},
        "@media (max-width:600px)":{
          mt:0,
        }
        
      }}>
        <Typography variant="h4" sx={{fontWeight:'bold'}}>Welcome to Restraunt</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum aspernatur quidem esse a veritatis adipisci tempore, quo repellendus neque, hic suscipit officia et amet perferendis error eum nesciunt natus autem voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium numquam ducimus voluptate sit unde. Similique delectus voluptates nihil iusto error dicta magni, tempora aliquam culpa distinctio, deleniti reprehenderit accusantium aliquid quod officiis.
        </p>
      </Box>
      <div style={{height:"300px"}}></div>
     
    </Layout>
  )
}

export default About
