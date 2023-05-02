import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../CSS/styles.css';
import CardOne from '../assets/Image2.png';
import CardTwo from '../assets/Image3.png';

const styles = {
    card: {
      width:' 18rem',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '20px',
      margin: '20px'
    },
    container: {
      display: 'flex',
      backgroundColor: 'rgba(68, 103, 252, .18)', 
      height:' fit-content',
      padding: '50px',
      justifyContent: 'center'
    },
    cardContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap'
    }
  }

function Options() {
  
    return (
      <div style={styles.container}>
        <div style={styles.cardContainer}>
          <Link to="/opportunities">
            <div style={styles.card}>
                <h3 class="page-header">I want to shadow</h3>
                <img src={CardOne} alt='artwork' className='cardImg' />
            </div>
          </Link>
          <Link to="/signup">
            <div style={styles.card}>
                <h3 class="page-header">I want to offer a shadow</h3>
                <img src={CardTwo} alt='artwork' className='cardImg' />
            </div>
          </Link>
          </div>
    </div>
    )
}

export default Options;
