import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from '@mui/material'
import Banner from '../images/banner.jpeg'
import '../styles/HomeStyles.css'

function Home() {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer" >
          <h1>Food Website</h1>
          <p>Best food in india</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>

        </div>
      </div>
    </Layout>
  )
}

export default Home
